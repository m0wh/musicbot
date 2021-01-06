// Pre-dominant → Dominant → Tonic

const chords = {
  pre: [
    {
      name: 'Dm7',
      subtitutes: ['D7', 'Dø5', 'Do7', 'A♭7', 'D♭Maj (Fm#5)']
    },
    {
      name: 'FMaj7',
      subtitutes: ['Fm7', 'F#o7', 'F#ø7']
    }
  ],
  dom: [
    {
      name: 'G7',
      subtitutes: ['G9/♭9/13', 'D♭7', 'E7', 'B♭7', 'G7sus', 'G7sus♭9']
    },
    {
      name: 'Bø7',
      subtitutes: ['Bo7']
    }
  ],
  ton: [
    {
      name: 'CMaj7',
      subtitutes: ['CMaj9#11', 'C69', 'C69#11']
    },
    {
      name: 'Cm7',
      subtitutes: ['CmMaj7', 'Cm6', 'Cm69']
    },
    {
      name: 'C7',
      subtitutes: ['C13', 'C7#9', 'C7♭9']
    },
    {
      name: 'Am7',
      subtitutes: ['Em7', 'FMaj7']
    }
  ]
}

const preRand = Math.random() * (chords.pre.length - 1)
const domRand = Math.random() * (chords.dom.length - 1)
const tonRand = Math.random() * (chords.ton.length - 1)

const prog = [
  chords.pre[Math.round(preRand)],
  chords.dom[Math.round(domRand)],
  chords.ton[Math.round(tonRand)],
  // chords.ton[Math.round(tonRand)]
].map(chord => [chord.name, ...chord.subtitutes][Math.round(Math.random() * chord.subtitutes.length)])
// ].map(chord => chord.name)

document.querySelector('.prog').textContent = prog.join(' — ')
prog.forEach(chord => {
  const ins = document.createElement('ins')
  ins.classList.add('scales_chords_api')
  ins.setAttribute('instrument', 'piano')
  ins.setAttribute('chord', chord)
  ins.setAttribute('output', 'sound')
  document.querySelector('.notes').append(ins)
})

prog.forEach(chord => {
  const ins = document.createElement('ins')
  ins.classList.add('scales_chords_api')
  ins.setAttribute('instrument', 'piano')
  ins.setAttribute('chord', chord)
  document.querySelector('.notes').append(ins)
})
