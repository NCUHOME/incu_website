import { FunctionComponent } from "preact";
import { useEffect } from 'preact/hooks'
import { useLocation, Params } from "wouter-preact";
import LoadingScreen from "components/LoadingScreen";
import Tips from "components/Tips";

interface Props {
  params: Params;
}

const Transfer: FunctionComponent<Props> = ({
  params
}) => {
  const [_, navigate] = useLocation();

  useEffect(() => {
    if (params?.id) {
      fetch("https://plot.ncuos.com/api/transfer")
        .then((res) => res.json())
        .then((res) => {
          const url = res.data.data;
          console.log(url);
          window.location.href = url;
        })
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Tips />
      <LoadingScreen />
    </div>
  );
};

export default Transfer;
