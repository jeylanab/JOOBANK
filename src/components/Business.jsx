import React from 'react'
import { features } from '../constants';
import styles , { layout } from '../style';
import Button from './Button';



const Business = () => {
  return (
    <section id='features' className={layout.section}>
          <div className={layout.sectionInfo}>
              <h2 className={styles.heading2}>You will do the business, <br className='sm:block hidden' />
                 we will handle the Money</h2>

              <p className={`${styles.paragraph} max-w-[470px] my-5`}>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                 optio laboriosam rerum dolorum eveniet atque perferendis
                  possimus ipsa repellendus odio? Possimus ut exercitationem culpa porro.
                 Repudiandae eaque praesentium repellat quas
              </p>
          </div>
    </section>
  )
}

export default Business