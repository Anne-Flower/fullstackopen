const PersonForm = ({newEnterNum, newEnterName, onStaffChangeNum, onStaffChangeName}) => {
  return (
    <p className="personsform">
      name: <input value={newEnterName} onChange={onStaffChangeName} />
      number: <input value={newEnterNum} onChange={onStaffChangeNum} />
    </p>
  );
};

export default PersonForm;
