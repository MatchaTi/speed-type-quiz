type UserCardProps = {
  name: string;
  role: string;
};

export default function UserCard({ name, role }: UserCardProps) {
  const badgeColor = role === "admin" ? "bg-red-500" : "bg-blue-500";

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold">{name}</h2>
      <span className={`${badgeColor} text-white px-2 py-1 rounded`}>{role}</span>
    </div>
  );
}