import React from 'react'

const Achivements = (): JSX.Element => {
  const achivementsData: object[] = [
    {
      title: 'Zadowolonych Klienów',
      value: '139',
    },
    {
      title: 'Wykonaliśmy km ogrodzenia',
      value: '139',
    },
    {
      title: 'Waga najciezszej bramy w kg',
      value: '300',
    },
  ]
  return (
    <section>
      {achivementsData.map((item, index) => {
        return <div key={index}>a1</div>
      })}
    </section>
  )
}

export default Achivements
