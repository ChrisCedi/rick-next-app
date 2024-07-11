interface Props {
  label: string;
  value: string;
}

export function TextInformation({ label, value }: Props) {
  return (
    <p className="text-xl py-2">
      <b className="text-primary">{`${label} `}</b> {value}
    </p>
  );
}
