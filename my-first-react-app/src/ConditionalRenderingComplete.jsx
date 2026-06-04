function StudentList(props) {
  // If students doesn't exist
  if (!props.students) {
    return <div>Loading...</div>;
  }

  // If students array is empty
  if (props.students.length === 0) {
    return <div>No students found</div>;
  }

  return (
    <>
      {/* && Operator */}
      {props.students && <h2>Results</h2>}

      {/* map() + key + ternary */}
      <ul>
        {props.students.map((student) => {
          return (
            <li key={student.id}>
              {student.name} - {student.passed ? "Passed" : "Failed"}
            </li>
          );
        })}
      </ul>

      <h3>Passed Students</h3>

      {/* map() + key + && */}
      <ul>
        {props.students.map((student) => {
          return student.passed && <li key={student.id}>{student.name}</li>;
        })}
      </ul>
    </>
  );
}

export default function App() {
  const students = [
    { id: 1, name: "Suraj", passed: true },
    { id: 2, name: "Rahul", passed: false },
    { id: 3, name: "Amit", passed: true },
    { id: 4, name: "Priya", passed: false },
  ];

  return (
    <div>
      <h1>Student Results</h1>
      <StudentList students={students} />
    </div>
  );
}
