import React from 'react';
import './ProjectCard.css';
import ProjectCardItem from './ProjectCardItem';

function ProjectCards() {
  return (
    <div className='project_cards'>
      <h1>Check out some work that I'm proud of!</h1>
      <div className='project_cards__container'>
        <div className='project_cards__wrapper'>
          <ul className='project_cards__items'>
            <ProjectCardItem
              src='/images/USAA.png'
              title='USAA Personal Investment App Extension'
              text='Researched, designed, and prototyped an extension to the USAA Personal Investment App to provide users with a more beginner friendly investment experience by allowing them to explore the education tab before inputing personal information to make an app. Created wireframes, conducted user testing, and designed a high fidelity prototype using Figma.'
            />
            <ProjectCardItem
              src='/images/walklocal.jpeg'
              title='Product Ideation for Women Walking Alone At Night'
              text='Researched, designed, and prototyped an app called Walk Local to provide users with a strong sense of safety when walking at night by giving them active control over their walking experience and won award of "Most Likely to Make an Impact." Researched a user group, finding that 73% of women reported feeling unsafe walking in a new area alone compared to only 15% of men, identified the specific needs of a user group by conducting 28 interviews, strategized the user process to streamline the app’s interface, and prototyped an initial design to determine that the app significantly reduced feelings of unsafety. Based on this research, Walk Local generates the ideal walking path from one destination to another by using an individuals preferences of lighting, population, and time to optimize the user’s route accordingly and make them feel like a local in any location.'
            />
            <ProjectCardItem
              src='/images/tupProj.jpg'
              title='Tupperware Brand Analysis and Marketing Campaign'
              text='Over the course of a semester, our group conducted research and market analysis on the brand Tupperware. We wanted to direct our research to ensure consumers still associated Tupperware with a level of quality that matched its price point as well as determine whether quality was an important factor considered when consumers were making food storage solution decisions and create a business case to instruct further action.'
            />
            <ProjectCardItem
              src='/images/harry2.png'
              title='Meta Campaign for the SGA VP and President Elect'
              text='Communicated the SGA VP and President Elect’s plan of action to follow through on three core principles with a two-week campaign on Meta platforms. Created a design scheme that was executed by a team of three design assistants, launched 15 Instagram posts portraying the SGA President and VP Elect’s values, goals, and accomplishments, designed 200 stickers on Adobe Photoshop and Illustrator to raise reported support via opinion polls, and won the campaign.'
            />
            <ProjectCardItem
              src='/images/penny.png'
              title='Style Guide for a Budget-Friendly Travel Agency'
              text='Ideated, designed, and prototyped a style guide for a budget-friendly travel agency called Penny. PennyPath Planners is a travel agency that provides users with a curated list of budget-friendly travel destinations and itineraries. Penny’s style guide was designed to be simple, clean, and modern to reflect the company’s values of simplicity, affordability, and accessibility. The style guide was created using Figma.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;