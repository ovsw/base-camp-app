/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {Box, Flex} from '@theme-ui/components'

import tw from 'tailwind.macro'
import styled from 'styled-components'

// containers
import SectionWithSidebar from '../../../containers/section-with-sidebar'
// commponents
import ProgramItem from './program'

// elements
import HPSection from '../../../elements/hp-section'

const ProgramsRootDiv = styled(HPSection)`
  ${tw`border-solid border-0 border-b border-grey-light`};
`

const Programs = () => {
  return (
    <section sx={{variant: 'sections.hpSection'}}>
      <SectionWithSidebar sidebar={<Sidebar />} mainContent={<MainContent />} leftSidebar />
    </section>
  )
}

const Sidebar = () => {
  return (
    <div sx={{textAlign: 'right'}}>
      <Styled.h2>Programs</Styled.h2>
      <div>
        <p> Each program provides structured activities chosen for your child's age group, along with well-trained and caring counselors and all the fun and excitement your child needs for the perfect summer. </p>
        <p> To make the summer a little easier for parents, we offer these special benefits for busy families: </p>
        <ul>
          <li>Complimentary door-to-door bus service</li>
          <li>Flexible camp schedules for busy families</li>
          <li>Modified program available to preschoolers</li>
        </ul>
        <a href='tel:6096225658' sx={{variant: 'buttons.outline', display: 'inline-block'}}>Call Us: (609) 622-5658</a>
      </div>
    </div>
  )
}

const programs = [
  {
    name: 'Pine Cone Camp',
    description: 'Even the youngest children from grades Pre-K through 1st Grade can enjoy a great camp experience at Rambling Pines!',
    link: '/programs/pine-cone-camp/'
  },
  {
    name: 'Day Camp',
    description: 'Children grades 2nd to 8th get a truly memorable camp experience with the varied programs Rambling Pines has to offer.',
    link: '/programs/day-camp/'
  },
  {
    name: 'Teen Camp',
    description: 'It’s not easy being a young teenager—too old for day camp, not quite old enough for a summer job. For campers in 7th through 9th Grade, the Teen Camp is the way to go!',
    link: '/programs/teen-camp/'
  },
  {
    name: 'Leader in Training',
    description: 'This program is specially designed for our 10th Grade campers to enjoy a summer of play and work as they transition from being our oldest campers to becoming our newest staff members.',
    link: '/programs/leader-in-training/'
  }
]

const MainContent = () => {
  return (
    <Flex sx={{pl: 4, flexWrap: 'wrap'}}>
      {programs.map(program => (
        <Box sx={{width: ['full', 'full', '1/2']}}>
          <ProgramItem {...program} key={program.name} />
        </Box>
      ))}
    </Flex>
  )
}

export default Programs
