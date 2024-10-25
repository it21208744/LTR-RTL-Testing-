import React from 'react'
import './css/App.css'
import { useDirection } from './Components/DirectionContext'
import Header from './Components/Header'
import FormComponent from './Components/FormComponent'
const MainComponent = () => {
  const { direction, toggleDirection } = useDirection()

  return (
    <div dir={direction} className="main-container">
      <Header />

      {direction === 'ltr' ? (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
          est deserunt dicta ratione corrupti alias eum velit quia et minima
          vero tenetur nam ut, porro commodi ab. Totam eum, quis explicabo
          praesentium nam amet accusamus ab ad veniam alias dolorem excepturi
          quos unde labore delectus, harum voluptatem, iste in voluptatum. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Porro omnis
          doloribus maxime aliquam enim, modi soluta praesentium, quae
          voluptate, nam vero tempore vitae. Eum, odio debitis architecto illo
          ipsum sint at beatae non placeat exercitationem. Modi reprehenderit
          iusto, placeat, enim sit cum ad magni quasi architecto velit autem,
          quidem eligendi!
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

      <FormComponent />
    </div>
  )
}

export default MainComponent
