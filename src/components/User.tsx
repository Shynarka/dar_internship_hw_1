interface UserProps {
  name?: String;
  lastname?: String;
  date_of_birth?: Date;
  email?: String;
  gender?: "Male" | "Female";
}

function User(props: UserProps) {
  return (
    <div>
      <h1>
        {props.name} {props.lastname}
      </h1>
      <p>Мой день рождения: {props.date_of_birth?.toDateString()}</p>
      <p>Со мной можно связываться по адресу: {props.email}</p>
      <p>Пол: {props.gender}</p>
    </div>
  );
}

export default User;
