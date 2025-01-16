export interface CardProps {
  image: string
  title: string
  fullName: string
}

export const Card = ({ image, title, fullName }: CardProps) => {
  return (
    <div className="flex h-72 w-64 flex-col items-center justify-center gap-4 p-3 shadow-md">
      <img src={image} alt={fullName} className="h-32 w-auto rounded-md" />
      <p className="text-center text-xl">{fullName}</p>
      <p className="text-center text-2xl text-green-500">{title}</p>
    </div>
  )
}

export default Card
