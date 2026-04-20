import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { ROUNDS } from '../data/rounds'

export function TastingRound({ roundIndex, playerId }) {
  const round = ROUNDS[roundIndex]
  const [selections, setSelections] = useState([null, null, null, null])
  const [activeType, setActiveType] = useState(null)
  const [cantParticipate, setCantParticipate] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setSelections([null, null, null, null])
    setActiveType(null)
    setCantParticipate(false)
    setSubmitted(false)
    setLoading(true)

    getDoc(doc(db, 'rounds', String(roundIndex), 'submissions', playerId)).then(snap => {
      if (snap.exists()) {
        const data = snap.data()
        if (data.answers) setSelections(data.answers)
        setCantParticipate(data.cantParticipate || false)
        setSubmitted(true)
      }
      setLoading(false)
    })
  }, [roundIndex, playerId])

  function handleTypeClick(typeIdx) {
    if (submitted || cantParticipate) return
    setActiveType(prev => prev === typeIdx ? null : typeIdx)
  }

  function handleSampleClick(sampleIdx) {
    if (submitted || cantParticipate) return

    if (activeType !== null) {
      setSelections(prev => {
        const next = [...prev]
        const conflict = next.indexOf(activeType)
        if (conflict !== -1) next[conflict] = next[sampleIdx]
        next[sampleIdx] = activeType
        return next
      })
      setActiveType(null)
    } else if (selections[sampleIdx] !== null) {
      // pick up the type from this sample
      setActiveType(selections[sampleIdx])
      setSelections(prev => {
        const next = [...prev]
        next[sampleIdx] = null
        return next
      })
    }
  }

  async function handleSubmit() {
    const subRef = doc(db, 'rounds', String(roundIndex), 'submissions', playerId)
    await setDoc(subRef, {
      answers: cantParticipate ? null : selections,
      cantParticipate,
      submittedAt: serverTimestamp(),
    })
    setSubmitted(true)
  }

  if (loading) return <div className="screen-center"><div className="spinner" /></div>

  const allSelected = selections.every(s => s !== null)
  const canSubmit = cantParticipate || allSelected

  return (
    <div className="tasting-round">
      <div className="round-header">
        <span className="round-badge">Round {roundIndex + 1} of {ROUNDS.length}</span>
        <h2 className="round-category">{round.category}</h2>
        <p className="round-nominated">Nominated by {round.nominatedBy}</p>
      </div>

      <div className={`matching-area${cantParticipate ? ' dimmed' : ''}`}>
        <p className="section-label">Types</p>
        <div className="types-grid">
          {round.types.map((type, typeIdx) => {
            const assignedSample = selections.indexOf(typeIdx)
            const isActive = activeType === typeIdx
            const isAssigned = assignedSample !== -1
            return (
              <button
                key={typeIdx}
                className={`type-card${isActive ? ' active' : ''}${isAssigned ? ' assigned' : ''}${submitted || cantParticipate ? ' locked' : ''}`}
                onClick={() => handleTypeClick(typeIdx)}
                disabled={submitted || cantParticipate}
              >
                <div className="type-name">{type.name}</div>
                <div className="type-notes">{type.tastingNotes}</div>
                <div className={`type-status${isActive && !isAssigned ? '' : ' invisible'}`}>↓ tap a sample</div>
              </button>
            )
          })}
        </div>

        <div className={`matching-hint${activeType !== null ? ' active-hint' : ''}`}>
          {activeType !== null
            ? `Now tap a sample to assign "${round.types[activeType].name}"`
            : allSelected
              ? 'All assigned — check your guesses or submit'
              : 'Tap a type to select it, then tap a sample'}
        </div>

        <div className="samples-grid">
          {[0, 1, 2, 3].map(sampleIdx => {
            const typeIdx = selections[sampleIdx]
            const isFilled = typeIdx !== null
            const isTargetable = activeType !== null && !submitted && !cantParticipate
            return (
              <button
                key={sampleIdx}
                className={`sample-tile${isFilled ? ' filled' : ''}${isTargetable ? ' targetable' : ''}${submitted || cantParticipate ? ' locked' : ''}`}
                onClick={() => handleSampleClick(sampleIdx)}
                disabled={submitted || cantParticipate}
              >
                <div className="sample-num">Sample {sampleIdx + 1}</div>
                <div className="sample-assignment">
                  {isFilled ? round.types[typeIdx].name : '—'}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <label className="cant-participate-label">
        <input
          type="checkbox"
          checked={cantParticipate}
          onChange={e => {
            if (submitted) return
            setCantParticipate(e.target.checked)
            if (e.target.checked) { setSelections([null, null, null, null]); setActiveType(null) }
          }}
          disabled={submitted}
        />
        I can't taste this round
      </label>

      {!submitted ? (
        <button
          className={`submit-btn${canSubmit ? '' : ' disabled'}`}
          onClick={handleSubmit}
          disabled={!canSubmit}
        >
          Submit Guesses
        </button>
      ) : (
        <div className="submitted-banner">
          <span className="check-icon">✓</span>
          Submitted — waiting for the round to end
        </div>
      )}
    </div>
  )
}
