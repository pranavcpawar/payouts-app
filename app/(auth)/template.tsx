export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-full h-full">{children}</div>;
}
