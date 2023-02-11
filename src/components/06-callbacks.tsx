import { ChangeEvent, MouseEvent, useState } from 'react'

export default function () {
  const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    alert('user have been deleted')
  }

  // window.setTimeout(deleteUser, 2000)

  const onNameChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.currentTarget.value)
  }
  const onNameClicked = () => {
    alert('Grisha')
  }

  return (
    <div>
      <div>
        <textarea onChange={onNameChanged}>grisha</textarea>
      </div>
      Grihsa <button>save</button>
      <button onClick={deleteUser}>delete</button>
    </div>
  )
}

let obj = {
  [20 + 30]: 'sum',
}

const tasks = {
  todo1: [
    { id: 1, title: 'html' },
    { id: 2, title: 'vue' },
    { id: 3, title: 'angular' },
  ],
  todo2: [
    { id: 1, title: 'milk' },
    { id: 2, title: 'water' },
    { id: 3, title: 'beer' },
  ],
}

console.log([...tasks.todo1, { id: 0, title: 'react' }])
