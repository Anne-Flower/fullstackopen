const PersonForm = ({newEnterNum, newEnterName, onStaffChangeNum, onStaffChangeName}) => {
  return (
    <div>
      name: <input value={newEnterName} onChange={onStaffChangeName} />
      number: <input value={newEnterNum} onChange={onStaffChangeNum} />
    </div>
  );
};

export default PersonForm;
