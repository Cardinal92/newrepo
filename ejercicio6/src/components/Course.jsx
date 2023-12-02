import TotalExercises from "./TotalExercises"

const Course = ({courses}) => {
    return (
      <div>
        <h1>Web development curriculum</h1>
        <h2>{courses[0].name}</h2>
        <ul>
          <li>{courses[0].parts[0].name} {courses[0].parts[0].exercises}</li>
          <li>{courses[0].parts[1].name} {courses[0].parts[1].exercises}</li>
          <li>{courses[0].parts[2].name} {courses[0].parts[2].exercises}</li>
          <li>{courses[0].parts[3].name} {courses[0].parts[3].exercises}</li>
          <li><TotalExercises sum={courses[0].parts}/> </li>
        </ul>
  
        <h2>{courses[1].name}</h2>
        <ul>
          <li>{courses[1].parts[0].name} {courses[1].parts[0].exercises}</li>
          <li>{courses[1].parts[1].name} {courses[1].parts[1].exercises}</li>
          <li><TotalExercises sum={courses[1].parts}/> </li>
        </ul>
      </div>
  
    )
  }

export default Course