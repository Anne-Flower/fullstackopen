import Part from './part';


const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return (
    <div>
      <Part parts={part1} exercises={exercises1}/>
      <Part parts={part2} exercises={exercises2}/>
      <Part parts={part3} exercises={exercises3}/>
    </div>
  )
}
export default Content;