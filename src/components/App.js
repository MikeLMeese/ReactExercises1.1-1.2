// 1.1 - Reorganize code into three components: Header, Content, and Total
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
// 1.2 - Refactor Content to render three Part components with each containing the name/exercises of one part
const Part = (props) => {
  return (
    <p>Part: {props.part} | Exercises: {props.exercises}</p>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3} />
      {/* <p>Part 1: {props.part1} | Number of Exercises: {props.exercises1</p>
      <p>Part 2: {props.part2} | Number of Exercises: {props.exercises2}</p>
      <p>Part 3: {props.part3} | Number of Exercises: {props.exercises3}</p> */}
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Total exercises: {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part1= {part1} exercises1 = {exercises1} part2 = {part2} exercises2 = {exercises2} part3 = {part3} exercises3 = {exercises3} />
      <Total exercises = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App