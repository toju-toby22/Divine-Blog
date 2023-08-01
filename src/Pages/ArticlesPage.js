import React from 'react'
import Navigation from '../Components/Navigation'
import { TableFooter } from '@mui/material'
import Footer from '../Components/Footer'
import { Container } from 'react-bootstrap'
import "../Styles/ArticlePage.css"

const ArticlesPage = () => {
  return (
    <div>
      <Navigation />

      <Container>
        <div className="article__container">
          <div className="box">

            <h1>Fixed Mindset Vs Growth Mindset. </h1>


            <h6> What type of mindset do you have?</h6>

            <p className='body__text'> Honestly, this is a question I didn't even know could be asked until recently.

              Look around you, think of everyone you know.

              <span>
                You'll notice that everyone is different in the way they react to situations, think and view life generally.
              </span>

              Some are naturally optimistic while some are pessimistic

              Some have a strong willpower and drive while some cave in on the first sight of an obstacle.

              In this article I am going to share the differences between the two mindsets — the fixed mindset and the broad mindset.
            </p>

            <h3>  What Is A Mindset? </h3>
            <p className='body__text'>  Your mindset is simply your way of thinking.

              To give you a better understanding of how mindsets work.

              Let's use YOU as an example.

              Let's say you've spent the last 5 months learning a skill, you spent money out of your own pocket to purchase resources and material.

              With the grandiose dream that you'll soon make your money back in 100 fold.

              But so far you've not been able to do it.

              Not even a single penny has been made.

              Not relatable?

              Okay here's another one

              You got a test coming up in 7 days…you stay up all night studying your ass off to ace this test

              But when the results show up — the dreaded thing happens.

              You failed.


              How do you react to situations like this?

              Do you feel like this is who you are and won't be able to get any better?

              Or

              It's just a learning phase that'll pass


              I just summed up the two mindsets in the last few sentences.

              So now let's dive into details
            </p>

            <h3> Fixed Mindset  </h3>

            <p className='body__text'>
              In her book on mindsets Carol S. Dweck talked about 6 new graduate students that got admitted into the University of Columbia.

              They all had shiny grades and rave recommendations from eminent scholars.

              When these graduate students looked at the daunting task ahead of them in this new endeavor of theirs some of them started feeling like imposters.

              They completely forgot the fact that they were supposed to learn how to do all of that in this new school.

              They didn't know how to do all of that yet — emphasis on yet.

              But because they had a fixed mindset they saw the world as black and white. It's either you know it or you don't.

              It's either you are an A student or you're not.

              It's either you can code or you can not.

              Sadly, this is the mindset many of us have.


              I used to be of this mindset and started to notice it when I got into college.

              When asked a question I didn't know, I would feel my ego rising inside (little did I know that it even affected my facial expression)

              This was because I had attached my intelligence to getting just one question right

              But what I failed to realize was that it's okay not to know as long as you're willing to learn…

              This type of mindset limits you in a lot of ways because since you think knowledge is fixed it gets to a point that you stop pushing yourself to learn new things and try out new things.

              That's when you start declining as a person and losing your value.
            </p>



            <h3> Growth Mindset </h3>

            <p className='body__text'>
              On the flip side there's another group of people who believe that nothing is fixed and that we're capable of becoming better than we are now.

              A study was conducted on a group of little kids. These kids were given some simple puzzles to attempt, and as expected they all got it right.

              Then the difficulty level was increased by a lot and they all struggled to solve the puzzle.

              Halfway through the puzzle they were asked if they wanted to continue with the puzzle that was difficult or go back to the easier one.

              Some drifted over to the easier side while some stuck with the difficult puzzle.

              Now these kids who stuck with the difficult puzzle are the ones with a growth mindset

              Because they are trying to overcome obstacles and learn something new, their ego is under control. It doesn't matter if they fail, fail and fail.


              A useful analogy is when you're trying to build muscle.

              If you're looking to grow your muscles and you keep training with the same weights, doing the same number of reps and performing the same routines you are already used to  you will not see any growth.

              You have to get uncomfortable by lifting heavier than you are used to in order to be able to tear and stretch your muscle tissues.

              It's hard to find those with a growth mindset at the same level even after a month because they're so dedicated to developing themselves.


              These people know a lot but act like they know nothing because the more they know the more they realize there's more to know.
            </p>

            
            <p className='text__bold'>  Now you can finally answer that question </p>
            <p className='text__bold'>  Which mindset do you have? </p>

            <p className='text__bold'>  Which do you think is better? </p>

            <p className='text__bold'>  That's a no brainer </p>

            <p className='text__bold'> It's definitely the growth mindset </p>

            <p className='text__bold'>  Ditch the ways of the fixed mindset and adopt a growth mindset to become a lifelong learner. </p>



          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default ArticlesPage;