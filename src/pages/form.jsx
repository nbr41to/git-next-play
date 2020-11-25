import React from 'react'
import Input from "../components/Input"

const Form = () => {
    const submit = (name, email, address, birthday, comment) => {
        console.log(`名前：${name} メール：${email} 住所：${address} 誕生日：${birthday} コメント：${comment}`)
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
