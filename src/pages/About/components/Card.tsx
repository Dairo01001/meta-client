export interface CardProps {
  image: string;
  title: string;
  fullName: string;
}

export const Card = ({ image, title, fullName }: CardProps) => {
  return (
    <div className="flex flex-col items-center justify-center shadow-md p-3 w-64 h-72 gap-4">
      <img src={image} alt={fullName} className="h-32 w-auto" />
      <p className="text-center text-xl">{fullName}</p>
      <p className="text-center text-2xl text-green-500">{title}</p>
    </div>
  );
};

export default Card;
