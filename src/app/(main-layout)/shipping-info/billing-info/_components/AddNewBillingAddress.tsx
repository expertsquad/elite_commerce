import React, { useEffect, useState } from "react";
import CustomInput from "@/Components/CustomInput";
import CustomDropdownSearchToApiFetch from "@/Components/CustomDropdownSearchToApiFetch";
import toast from "react-hot-toast";
import { fetchCountryDataClientSide } from "@/actions/fetchCountryDataClientSide";

const AddNewBillingAddress = ({
  onNewAddressChange,
  country,
  states,
  cities,
}: {
  onNewAddressChange: (newAddress: any) => void;
  country: string;
  states?: any;
  cities?: any;
}) => {
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [cityDatas, setCityDatas] = useState(
    cities?.data?.map((c: any) => c?.name)
  );
  const [stateDatas, setStateDatas] = useState(
    states?.data?.map((s: any) => s?.name)
  );
  const [citySearchInputValue, setCitySearchInputValue] = useState("");
  const [stateSearchInputValue, setStateSearchInputValue] = useState("");
  const [newAddress, setNewAddress] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    state: "",
    zipCode: "",
    companyName: "",
    streetAddress: "",
    country: "",
    isDefault: false,
    selectedShippingAddress: "newAddress",
    city: "",
  });

  // used useEffect to set city and state
  useEffect(() => {
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      city: city,
      state: selectedState,
      country: country,
    }));
  }, [city, selectedState, country]);

  // fatching expected data from country api

  useEffect(() => {
    const handleClientSiteCityFetch = async (
      country: string,
      selectedState: string,
      citySearchInputValue: string
    ) => {
      try {
        // fatching data from country api by city and country name
        if (citySearchInputValue) {
          const res = await fetchCountryDataClientSide({
            route: "/city",
            query: `name=${citySearchInputValue}&country_name=${country}`,
            limit: 10,
          });

          if (res?.success) {
            const cityData = res?.data?.map((c: any) => c?.name);
            setCityDatas(cityData?.length ? cityData : ["No Data Found"]);
          }
        } else if (selectedState) {
          // fatching data from country api by state and country name
          const res = await fetchCountryDataClientSide({
            route: "/city",
            query: `country_name=${country}&state_name=${selectedState}`,
            limit: 10,
          });

          if (res?.success) {
            const cityData = res?.data?.map((c: any) => c?.name);
            setCityDatas(cityData?.length ? cityData : ["No Data Found"]);
          }
        }
      } catch (error) {
        toast.error("Error fetching city data");
      }
    };

    handleClientSiteCityFetch(country, selectedState, citySearchInputValue);
  }, [selectedState, country, citySearchInputValue]);

  // getting state data by country and stete name

  useEffect(() => {
    if (stateSearchInputValue) {
      const fetchData = async () => {
        try {
          console.log(stateSearchInputValue);
          const res = await fetchCountryDataClientSide({
            route: "/state",
            query: `country_name=${country}&name=${stateSearchInputValue}`,
            limit: 10,
          });
          console.log(res);
          if (res?.success) {
            const stateData = res?.data?.map((s: any) => s?.name);
            setStateDatas(stateData?.length ? stateData : ["Data Not Found"]);
          }
        } catch (error) {
          toast.error("Error fetching state data");
        }
      };

      fetchData();
    }
  }, [stateSearchInputValue, country]);

  const handleInputChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    const updatedAddress = {
      ...newAddress,
      [name]: type === "checkbox" ? checked : value,
    };
    setNewAddress(updatedAddress);
    onNewAddressChange(updatedAddress);
  };

  return (
    <form>
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 ">
        <CustomInput
          label="First Name"
          type="text"
          name="firstName"
          placeholder="Zayed"
          value={newAddress?.firstName}
          onChange={handleInputChange}
          required
        />
        <CustomInput
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Hossain"
          value={newAddress?.lastName}
          onChange={handleInputChange}
          required
        />

        <CustomInput
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder="017*******"
          value={newAddress?.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <div className="opacity-50 pointer-events-none">
          <CustomInput
            label="Country"
            type="text"
            name="country"
            placeholder="Bangladesh"
            value={country}
            onChange={handleInputChange}
            readonly
          />
        </div>

        <CustomDropdownSearchToApiFetch
          data={stateDatas ? stateDatas : ["No Data For This Country"]}
          onClick={(value) => setSelectedState(value)}
          className="w-full border border-black-10 py-2 rounded-lg px-3 "
          itemClassName="py-1 hover:bg-black-10"
          defaultValue="Select State"
          label="Select State"
          searchInput={true}
          setSearchInputValue={setStateSearchInputValue}
        />

        <CustomDropdownSearchToApiFetch
          data={cityDatas ? cityDatas : ["No Data For This Country"]}
          onClick={(value) => setCity(value)}
          className="w-full border border-black-10 py-2 rounded-lg px-3 "
          itemClassName="py-1 hover:bg-black-10"
          defaultValue="Select Cities"
          label="Select Cities"
          searchInput={true}
          setSearchInputValue={setCitySearchInputValue}
        />

        <CustomInput
          label="Zip Code"
          type="text"
          name="zipCode"
          placeholder="00108"
          value={newAddress?.zipCode}
          onChange={handleInputChange}
          required
        />
        <CustomInput
          label="Company Name (Optional)"
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={newAddress?.companyName}
          onChange={handleInputChange}
        />
        <div className="row-span-1">
          <CustomInput
            label="Street Address"
            type="text"
            name="streetAddress"
            placeholder="1234 Main St"
            value={newAddress?.streetAddress}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </form>
  );
};

export default AddNewBillingAddress;
