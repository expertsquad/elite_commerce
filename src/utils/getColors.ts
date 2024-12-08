// hooks/useGetColors.js
import { useEffect } from "react";
import { fetchData } from "@/actions/fetchData";

const useGetColors = () => {
  useEffect(() => {
    async function fetchColors() {
      try {
        const res = await fetchData({ route: "/settings/shop" });
        const data = res?.data;

        if (data) {
          const {
            primaryColor,
            primaryLightColor,
            seconderyColor,
            seconderyLightColor,
          } = data;
          document.documentElement.style.setProperty(
            "--primary-color",
            primaryColor
          );
          document.documentElement.style.setProperty(
            "--primary-light-color",
            primaryLightColor
          );
          document.documentElement.style.setProperty(
            "--secondary-color",
            seconderyColor
          );
          document.documentElement.style.setProperty(
            "--secondary-light-color",
            seconderyLightColor
          );
        }
      } catch (error) {
        // console.error("Failed to fetch colors:", error);
      }
    }

    fetchColors();
  }, []);
};

export default useGetColors;
