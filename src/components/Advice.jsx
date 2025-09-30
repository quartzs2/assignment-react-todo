import { useQuery } from "@tanstack/react-query";
import { getAdvice } from "../api/getAdvice";
import { QUERY_KEYS } from "../constants/queryKeys";

function Advice() {
  const { data: adviceData } = useQuery({
    queryKey: [QUERY_KEYS.ADVICE],
    queryFn: () => getAdvice(),
  });

  if (!adviceData) {
    return null;
  }

  return (
    <div className="advice">
      <p>{adviceData.message}</p>
      <p>-{adviceData.author}-</p>
    </div>
  );
}

export default Advice;
