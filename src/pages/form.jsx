import React from 'react'

const Form = () => {
  const onSubmit = () => {
    console.log({})
  }
  return (
    <div>
      <h1>お問い合わせ</h1>
      <form>
        {/* ここに名前とメールアドレスと住所と誕生日とコメントを入力して送信したい */}
        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <button>送信</button>
      </form>
    </div>
  )
}

export default Form
