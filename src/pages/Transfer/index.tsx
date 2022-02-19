import React from "react";
import { useLocation, navigate } from "@reach/router";
import { parse } from "query-string";
import axios from "axios";
import LoadingScreen from "components/LoadingScreen";
import Tips from "components/Tips";

const Transfer = () => {
  const location = useLocation();
  const searchParams = parse(location.search);

  React.useEffect(() => {
    if (searchParams.id) {
      axios
        .get("https://plot.ncuos.com/api/transfer", {
          params: {
            id: searchParams.id,
          },
        })
        .then((res) => {
          const url = res.data.data;
          console.log(url);
          location.href = url;
        });
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
