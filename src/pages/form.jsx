import React from 'react'
import Input from "../components/Input"

const Form = () => {
    const submit = () => {
        console.log()
    }

    return (
        <div>
            <h1>お問い合わせ</h1>
            <form>
            {/* ここに名前とメールアドレスと住所と誕生日とコメントを入力して送信したい */}
                <Input 
                    submit={submit}
                />
            
            </form>

        </div>
    )
}

export default Form
