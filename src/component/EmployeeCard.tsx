import '../styles/EmployeeCard.css';

interface Props {
  name: string;
  email: string;
  city: string;
}

function EmployeeCard({name, email, city}: Props) {
  return (
    <div className="employee-card">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
}

export default EmployeeCard;