import React from 'react'
import s from './CartWrap.module.scss'

const CartWrap = () => {
  return (
   <>
   <section>
    <div className="container">
        <h2 className={s.tt}>Your cart</h2>
        <div className={s.Wrapper}>
            <div className={s.wrap1}>
                <div className={s.cards}>
                    <div className={s.card}>

                        <div className={s.left}>
                            <img src="/Frame33.png" alt="" />
                            <div className={s.text}>
                            <h5>Gradient Graphic T-shirt</h5>
                            <p>Size: <span>Large</span></p>
                            <p>Color:  <span> White</span></p>
                            <h4>$145</h4>
                            </div>
                        </div>


                        <div className={s.right}>
                            <button className={s.btn1}>
                                <img src="/Frame.png" alt="" />
                            </button>
                           
                            <div className={s.count}>
                            <div className={s.cart1}>
                                <button className={s.btn11}>-</button>
                                <p>1</p>
                                <button className={s.btn22}>+</button>
                           </div>
                            </div>

                        </div>



                    </div>
                    <div className={s.card}>
                    <div className={s.left}>
                            <img src="/Frame34.png" alt="" />
                            <div className={s.text}>
                            <h5 className={s.pt}>CHECKERED SHIRT</h5>
                            <p>Size: <span>Large</span></p>
                            <p>Color:  <span> White</span></p>
                            <h4>$145</h4>
                            </div>
                        </div>


                        <div className={s.right}>
                            <button className={s.btn1}>
                            <img src="/Frame.png" alt="" />
                            </button>
                           
                           <div className={s.count}>
                           <div className={s.cart1}>
                                <button className={s.btn11}>-</button>
                                <p>1</p>
                                <button className={s.btn22}>+</button>
                           </div>
                           </div>

                        </div>
                    </div>
                    <div className={s.card}>
                    <div className={s.left}>
                            <img src="/image9.png" alt="" />
                           <div className={s.text}>
                           <h5 className={s.pt}>SKINNY FIT JEANS</h5>
                            <p>Size: <span>Large</span></p>
                            <p>Color:  <span> White</span></p>
                            <h4>$145</h4>
                           </div>
                        </div>


                        <div className={s.right}>
                            <button className={s.btn1}>
                            <img src="/Frame.png" alt="" />
                            </button>
                           
                           <div className={s.count}>
                           <div className={s.cart1}>
                                <button className={s.btn11}>-</button>
                                <p>1</p>
                                <button className={s.btn22}>+</button>
                           </div>
                           </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className={s.wrap2}>
                <img src="/Frame28.png" alt="" />

            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default CartWrap
