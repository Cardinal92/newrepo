const TotalExercises = ({sum}) => {
    return (
      <div>total exercises {sum.reduce((base, part) => {return base + part.exercises}, 0)}</div>
    )
  }
  
export default TotalExercises