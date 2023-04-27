
interface ComponentTestProps {
  element?: React.ReactNode;
}

function ComponentTest({ element }: ComponentTestProps) {
  return (
    <>
      {element ?? null}
    </>
  );
}

export default ComponentTest;
