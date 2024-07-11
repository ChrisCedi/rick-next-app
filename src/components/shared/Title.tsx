interface Props {
  title: string;
}

export function Title({ title }: Props) {
  return <h1 className={`text-3xl font-bold text-primary py-4`}>{title}</h1>;
}
