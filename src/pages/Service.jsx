import style from './Service.module.css'

function Service(){
    return(
        <>
       
    <div className={style.form}>
        <div><h2>Have a question?</h2></div>
        <div className={style.inputs}>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="42" rows="10" placeholder="Your Message"></textarea>
        </div>
    </div>

        </>
    )
}
export default Service