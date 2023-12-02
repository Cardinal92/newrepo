const Header = ({course}) => <h1>{course.name}</h1>

const Part = ({part, exercises}) => {
  return (
    <p>
    {part} {exercises}
    </p> 
  )
}

const Content = ({course}) => {
  return (  
    <div>
      <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
    </div>
  )

}

const Total = ({course}) => {
  return (
      <p>el numero total de ejercicios es {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
  )
}


const App = () => {
  const course = {
    name: "half stack application development",
    parts: [
    {
      name: "fundamentals of react",
      exercises: 10
    },
    {
      name: "using props to pass data",
      exercises: 7
    },
  
    {
      name:"state of a component",
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App
