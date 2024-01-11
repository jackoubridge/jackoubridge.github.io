import Header from './Header';
import Skill from './Skill';

const Skills = (props) => {
  return (
    <>
      <div className='p-3 container-fluid skills mb-3 z-1'>
        <div className='row w-auto d-flex m-0 p-0 skills-row justify-content-between'>
          <Header title="Jack of All Trades" />

          <Skill title="Software Development" imgLink="3573/3573187" />
          <Skill title="Git / Source Control" imgLink="1240/1240970" />
          <Skill title="Debugging" imgLink="1541/1541504" />
          <Skill title="Testing" imgLink="3281/3281188" />
          <Skill title="OOP" imgLink="8093/8093354" />
          <Skill title="CLIs" imgLink="10396/10396813" />
          <Skill title="Databases" imgLink="1602/1602309" />
          <Skill title="Networking" imgLink="900/900334" />
          <Skill title="Data Structures" imgLink="4699/4699844" />
          <Skill title="Algorithms" imgLink="1471/1471299" />
          <Skill title="Data Analysis" imgLink="2329/2329087" />
          <Skill title="Cloud Computing" imgLink="565/565190" />
          <Skill title="Front-end Development" imgLink="781/781683" />
          <Skill title="IDEs" imgLink="11676/11676341" />
          <Skill title="AI" imgLink="9716/9716599" />
          <Skill title="Security" imgLink="1746/1746650" />
          <Skill title="Hardware" imgLink="1566/1566210" />
          <Skill title="Mathematics" imgLink="3320/3320938" />
          <Skill title="Problem Solving" imgLink="2896/2896405" />
          <Skill title="Project Management" imgLink="3286/3286768" />
          <Skill title="Teamwork" imgLink="2352/2352167" />
          <Skill title="Designing" imgLink="681/681662" />
          <Skill title="Video Editing" imgLink="5243/5243771" />
          <Skill title="Image Editing" imgLink="4623/4623252" />
          <Skill title="Content Creation" imgLink="4520/4520915" />
          <Skill title="Music Production" imgLink="3039/3039404" />
          <Skill title="Spreadsheets" imgLink="9935/9935375" />
        </div>
      </div>
    </>
  )
}

export default Skills

