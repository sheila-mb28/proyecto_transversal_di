import '../styles/IncidentCard.css';

interface Props {
  title: string;
  completed: boolean;
}

function IncidentCard({title, completed}: Props) {
  return (
    <div className={completed ? 'incident-card resuelta' : 'incident-card pendiente'}>
      <p className="incident-estado">{completed ? '✔ Resuelta' : '● Pendiente'}</p>
      <p>{title}</p>
    </div>
  );
}

export default IncidentCard;