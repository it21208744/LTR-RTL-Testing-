import React from 'react'
import { useDirection } from './Components/DirectionContext'
import Header from './Components/Header'

const MainComponent = () => {
  const { direction, toggleDirection } = useDirection()

  return (
    <div dir={direction}>
      <Header />

      {direction === 'ltr' ? (
        <p>
          There was little doubt that the bridge was unsafe. All one had to do
          was look at it to know that with certainty. Yet Bob didn't see another
          option. He may have been able to work one out if he had a bit of time
          to think things through, but time was something he didn't have. A
          choice needed to be made, and it needed to be made quickly. The red
          ball sat proudly at the top of the toybox. It had been the last to be
          played with and anticipated it would be the next as well. The other
          toys grumbled beneath. At one time each had held the spot of the red
          ball, but over time they had sunk deeper and deeper into the toy box.
        </p>
      ) : (
        <p>
          لم يكن هناك شك في أن الجسر كان غير آمن. كل ما كان على المرء أن يفعله
          هو فانظر إليها لتعرف ذلك يقينا. لكن بوب لم ير آخر خيار. ربما كان
          قادرًا على حل هذه المشكلة إذا كان لديه القليل من الوقت للقيام بذلك فكر
          في الأمور ملياً، لكن الوقت كان شيئاً لم يكن يملكه. خيار كان لا بد من
          صنعه، وكان لا بد من صنعه بسرعة. جلست الكرة الحمراء بفخر في الجزء
          العلوي من صندوق الألعاب. لقد كان آخر من تم اللعب به وتوقع أن يكون
          التالي أيضًا. تذمر الألعاب الأخرى أسفل. في وقت ما، كان كل منهما يحمل
          مكان الكرة الحمراء، ولكن انتهى الأمر الوقت الذي غرقوا فيه بشكل أعمق
          وأعمق في صندوق الألعاب.
        </p>
      )}
    </div>
  )
}

export default MainComponent
