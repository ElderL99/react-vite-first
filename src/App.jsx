import KoderCard from "./components/KoderCard";

const users = [
  {
    profilePicUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    name: "Carlos Ramírez",
    hobbie: "Fotografía",
  },
  {
    profilePicUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    name: "Mariana López",
    hobbie: "Leer novelas",
  },
  {
    profilePicUrl:
      "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
    name: "Luis Hernández",
    hobbie: "Tocar guitarra",
  },
  {
    profilePicUrl:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    name: "Andrea Torres",
    hobbie: "Viajar",
  },
  {
    profilePicUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    name: "Jorge Sánchez",
    hobbie: "Correr maratones",
  },
  {
    profilePicUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    name: "Sofía Morales",
    hobbie: "Pintar acuarelas",
  },
];

const App = () => {
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center gap-4 ">
        <h1 className="text-4xl font-bold ">Lista de koders</h1>
        <section className="flex flex-col gap-4 w-full max-w-screen-sm  ">
          {users.map((user) => {
            return (
              <KoderCard
                key={user.name}
                profilePicUrl={user.profilePicUrl}
                name={user.name}
                hobby={user.hobbie}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};

export default App;
