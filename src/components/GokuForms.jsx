import React, { useState } from 'react'
import Select from 'react-select'
import '../styles/GokuForms.scss'

//Goku Forms Images

const GokuForms = () => {
  const [selected, setSelected] = useState('')

  //Custom styles for Select
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? '#441907' : '#d69811',
      backgroundColor: state.isSelected ? '#ffae00' : '#441907',
      '&:hover': {
        backgroundColor: '#da531a',
        color: '#000',
        cursor: 'pointer',
      },
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: '#441907',
      padding: '5px',
      border: 'none',
      boxShadow: 'none',
      borderRadius: '1rem',
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#d69811' }),
  }

  //Options.Json

  const options = [
    {
      id: 1,
      value: 'basic',
      label: 'Basic',
      Description:
        'Few characters in the history of anime have gone through more than Goku. From Dragon Ball all the way through Dragon Ball Super, he’s been through a lot of fights, and along with those fights have come a tidal wave of transformations. Sometimes, it can seem like Goku’s power is truly limitless, but as we break down all of the forms he’s assumed over the course of his series, his power level very much depends on who he has to beat. ',
    },
    {
      id: 2,
      value: 'kaoiken',
      label: 'Kaoiken',
      Description:
        'Goku’s first death comes during his fight with Raditz, but it’s ultimately necessary for him to learn the Kaioken, a technique that is something very much like a transformation. It allows Goku to temporarily boost his power levels, but we don’t see him unveil it until he comes face to face with the Saiyans. When he does, we see that Goku’s power isn’t limited by his physical abilities. Eventually, Goku even begins to use the Kaioken to augment his other transformations. ',
    },
    {
      id: 3,
      value: 'super saiyan',
      label: 'Super Saiyan',
      Description:
        'Goku’s power continues to grow, and by the time he’s come face to face with Frieza, he’s basically the only person Frieza’s ever met who can hold his own. Even that isn’t enough to beat Frieza, though, so instead of destroying his body with Kaioken, Goku elects to build a massive spirit bomb that he can use to take out Frieza. When Frieza gets annoyed by this, though, he decides to kill Krillin. That turns out to have been a mistake on Frieza’s part, as Krillin’s death allows Goku to go Super Saiyan and ultimately overpower Frieza. ',
    },
    {
      id: 4,
      value: 'super saiyan 2',
      label: 'Super Saiyan 2',
      Description:
        'Goku, Vegeta, and Trunks all push the Super Saiyan form to new limits during the cell saga, but Gohan is actually the person to discover that Super Saiyan 2 exists during his battle with Cell. After Goku dies during his battle with Cell, he trains in the afterlife and ultimately finds his way to Super Saiyan 2. He first displays the form for a brief second during his battle with Yakon, but doesn’t use it much after that. ',
    },
    {
      id: 5,
      value: 'super saiyan 3',
      label: 'Super Saiyan 3',
      Description:
        'In Dragon Ball Z, Super Saiyan 3 proves to be a bit unwieldy for Goku, who transforms into it while stalling during a battle with Buu. Because of the physical toll it takes on his body, though, Goku can’t sustain the form for long. After all, his initial transition into the form is literally galaxy-shaking. Goku gets more experience with Super Saiyan 3 by the time Dragon Ball Super rolls around, but it clearly took him a significant amount of time to master. ',
    },
    {
      id: 6,
      value: 'super saiyan 4',
      label: 'Super Saiyan 4',
      Description:
        'Dragon Ball GT is not in the proper Dragon Ball canon, but Super Saiyan 4 has become popular enough that it seems to be worth mentioning. After Baby managed to defeat Super Saiyan 3 Goku, he went looking for a higher power. First he sought help from the Kais to regain his tail, and then he transformed into Golden Oozaru, a form he initially had little control over. Eventually, though, he managed gain control and transformed into Super Saiyan 4 as a result. ',
    },
    {
      id: 7,
      value: 'super saiyan god',
      label: 'Super Saiyan God',
      Description:
        'Goku uses a ritual to transform into Super Saiyan God, and the power he ultimately wields is not his own. Thanks to a ritual, Goku is able to absorb the power of other righteous Saiyans in order to take on Beerus, and it’s a reminder that even in the world of Dragon Ball Z, Goku still has some limitations. He’s not an actual god, as much as it may seem like he is from time to time. ',
    },
    {
      id: 8,
      value: 'ultra instinct',
      label: 'Ultra Instinct',
      Description:
        'The final forms on this list involve Goku tapping into his base instincts, and he triggers Ultra Instinct for the first time during the Tournament of Power. Goku can trigger the Ultra Instinct -Sign- transformation as long as he’s calm, and he chose to do so during his battle with Gas. The -Sign- variation allows Goku to retain some control over his emotions, although it also makes the form less powerful. ',
    },
    {
      id: 9,
      value: 'mastered ultra instinct',
      label: 'Mastered Ultra Instinct',
      Description:
        'The mastered form of Ultra Instinct comes in handy later on in Super when Goku has to take on Jiren during the Tournament of Power. Goku was initially on total defense in their fight, but his counteroffensive culminated with this transformation, which allowed him to win the fight. Even after that fight, though, Goku couldn’t trigger that form at will until Moro’s disappearance. When Goku managed to hold his emotions in check in spite of what had occurred, he learned how to use the form completely at will. ',
    },
    {
      id: 10,
      value: 'goku black',
      label: 'Goku Black',
      Description:
        'Black, is an alternate incarnation of Zamasu and a former North Kai and Supreme Kai apprentice serving his former master Gowasu from the unaltered main timeline within Universe 10. He serves as the main antagonist of the Future Trunks Saga of Dragon Ball Super. ',
    },
  ]
  const handleChange = (selectedOption) => {
    setSelected(selectedOption)
  }
  return (
    <>
      <div className='gokuforms_wrapper'>
        <div className='gokuforms_wrapper_line'></div>
        <h3 className='gokuforms_wrapper_title'>Some info about Goku's Legendary Forms</h3>
        <div className='gokuforms_container'>
          <div className='gokuforms_img_conatiner'>
            <img
              className='gokuforms_img'
              //Each State changes the img Url
              src={require(`../assets/gokuforms/${selected.label}.png`)}
              alt={`${selected.label}_img`}
            ></img>
          </div>
          <div className='gokuforms_text_container'>
            <Select
              placeholder='Please Select One Form'
              options={options}
              onChange={handleChange}
              autoFocus={true}
              className='react-select-container'
              classNamePrefix='react-select'
              styles={customStyles}
            />
            <div className='gokuforms_text_info'>{selected && <>{selected.Description}</>}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GokuForms
