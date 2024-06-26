import { ICountry } from '../core/models/countries.interface';

export abstract class AppComponentBase {
  countriesLocalAPI = [
   
    {
      "name": "Afghanistan",
      "alpha3": "AFG",
      "dial_code": "+93",
      "continent": "Asia",
      "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
  },
  {
      "name": "Åland Islands",
      "alpha3": "ALA",
      "dial_code": "+358",
      "continent": "Europe",
      "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg"
  },
  {
      "name": "Albania",
      "alpha3": "ALB",
      "dial_code": "+355",
      "continent": "Europe",
      "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg"
  },
  {
      "name": "Algeria",
      "alpha3": "DZA",
      "dial_code": "+213",
      "continent": "Africa",
      "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"
  },
  {
      "name": "American Samoa",
      "alpha3": "ASM",
      "dial_code": "+1 684",
      "continent": "Oceania",
      "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg"
  },
  {
      "name": "Andorra",
      "alpha3": "AND",
      "dial_code": "+376",
      "continent": "Europe",
      "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg"
  },
  {
      "name": "Angola",
      "alpha3": "AGO",
      "dial_code": "+244",
      "continent": "Africa",
      "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg"
  },
  {
      "name": "Anguilla",
      "alpha3": "AIA",
      "dial_code": "+1 264",
      "continent": "North America",
      "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg"
  },
  {
    "name": "Antigua and Barbuda",
    "alpha3": "ATG",
    "dial_code": "+1 268",
    "continent": "North America",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg"
},
{
    "name": "Argentina",
    "alpha3": "ARG",
    "dial_code": "+54",
    "continent": "South America",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg"
},
{
    "name": "Armenia",
    "alpha3": "ARM",
    "dial_code": "+374",
    "continent": "Asia",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg"
},
{
    "name": "Aruba",
    "alpha3": "ABW",
    "dial_code": "+297",
    "continent": "North America",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg"
},
{
    "name": "Australia",
    "alpha3": "AUS",
    "dial_code": "+61",
    "continent": "Oceania",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"
},
{
    "name": "Austria",
    "alpha3": "AUT",
    "dial_code": "+43",
    "continent": "Europe",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg"
},
{
    "name": "Azerbaijan",
    "alpha3": "AZE",
    "dial_code": "+994",
    "continent": "Asia",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"
},
{
    "name": "Bahamas",
    "alpha3": "BHS",
    "dial_code": "+1 242",
    "continent": "North America",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg"
},
{
    "name": "Bahrain",
    "alpha3": "BHR",
    "dial_code": "+973",
    "continent": "Asia",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg"
},
{
    "name": "Bangladesh",
    "alpha3": "BGD",
    "dial_code": "+880",
    "continent": "Asia",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"
},
{
    "name": "Barbados",
    "alpha3": "BRB",
    "dial_code": "+1 246",
    "continent": "North America",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg"
},
{
    "name": "Belarus",
    "alpha3": "BLR",
    "dial_code": "+375",
    "continent": "Europe",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg"
},
{
    "name": "Belgium",
    "alpha3": "BEL",
    "dial_code": "+32",
    "continent": "Europe",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
},
{
    "name": "Belize",
    "alpha3": "BLZ",
    "dial_code": "+501",
    "continent": "North America",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg"
},
{
    "name": "Benin",
    "alpha3": "BEN",
    "dial_code": "+229",
    "continent": "Africa",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg"
},
{
    "name": "Bermuda",
    "alpha3": "BMU",
    "dial_code": "+1 441",
    "continent": "North America",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg"
},
{
    "name": "Bhutan",
    "alpha3": "BTN",
    "dial_code": "+975",
    "continent": "Asia",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg"
},
{
    "name": "Bolivia",
    "alpha3": "BOL",
    "dial_code": "+591",
    "continent": "South America",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Bandera_de_Bolivia_%28Estado%29.svg"
},
{
    "name": "Bonaire - Sint Eustatius and Saba",
    "alpha3": "BES",
    "dial_code": "+599",
    "continent": "North America",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
},
{
    "name": "Bosnia and Herzegovina",
    "alpha3": "BIH",
    "dial_code": "+387",
    "continent": "Europe",
    "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg"
},
{
  "name": "Botswana",
  "alpha3": "BWA",
  "dial_code": "+267",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg"
},
{
  "name": "Brazil",
  "alpha3": "BRA",
  "dial_code": "+55",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg"
},
{
  "name": "British Indian Ocean Territory",
  "alpha3": "IOT",
  "dial_code": "+246",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg"
},
{
  "name": "Brunei Darussalam",
  "alpha3": "BRN",
  "dial_code": "+673",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg"
},
{
  "name": "Bulgaria",
  "alpha3": "BGR",
  "dial_code": "+359",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg"
},
{
  "name": "Burkina Faso",
  "alpha3": "BFA",
  "dial_code": "+226",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg"
},
{
  "name": "Burundi",
  "alpha3": "BDI",
  "dial_code": "+257",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg"
},
{
  "name": "Cabo Verde",
  "alpha3": "CPV",
  "dial_code": "+238",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg"
},
{
  "name": "Cambodia",
  "alpha3": "KHM",
  "dial_code": "+855",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg"
},
{
  "name": "Cameroon",
  "alpha3": "CMR",
  "dial_code": "+237",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg"
},
{
  "name": "Canada",
  "alpha3": "CAN",
  "dial_code": "+1",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
},
{
  "name": "Cayman Islands",
  "alpha3": "CYM",
  "dial_code": "+1 345",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg"
},
{
  "name": "Central African Republic",
  "alpha3": "CAF",
  "dial_code": "+236",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg"
},
{
  "name": "Chad",
  "alpha3": "TCD",
  "dial_code": "+235",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg"
},
{
  "name": "Chile",
  "alpha3": "CHL",
  "dial_code": "+56",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg"
},
{
  "name": "China",
  "alpha3": "CHN",
  "dial_code": "+86",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
},
{
  "name": "Christmas Island",
  "alpha3": "CXR",
  "dial_code": "+61",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg"
},
{
  "name": "Cocos (Keeling) Islands",
  "alpha3": "CCK",
  "dial_code": "+61",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg"
},
{
  "name": "Colombia",
  "alpha3": "COL",
  "dial_code": "+57",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg"
},
{
  "name": "Comoros",
  "alpha3": "COM",
  "dial_code": "+269",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg"
},
{
  "name": "Congo",
  "alpha3": "COG",
  "dial_code": "+242",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg"
},
{
  "name": "The Democratic Republic of Congo",
  "alpha3": "COD",
  "dial_code": "+243",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg"
},
{
  "name": "Cook Islands",
  "alpha3": "COK",
  "dial_code": "+682",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg"
},
{
  "name": "Costa Rica",
  "alpha3": "CRI",
  "dial_code": "+506",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg"
},
{
  "name": "Côte d'Ivoire",
  "alpha3": "CIV",
  "dial_code": "+225",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg"
},
{
  "name": "Croatia",
  "alpha3": "HRV",
  "dial_code": "+385",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
  "license": "Public domain"
},
{
  "name": "Cuba",
  "alpha3": "CUB",
  "dial_code": "+53",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg",
  "license": "Public domain"
},
{
  "name": "Curaçao",
  "alpha3": "CUW",
  "dial_code": "+599",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_Cura%C3%A7ao.svg",
  "license": "Public domain"
},
{
  "name": "Cyprus",
  "alpha3": "CYP",
  "dial_code": "+357",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
  "license": "Public domain"
},
{
  "name": "Czechia",
  "alpha3": "CZE",
  "dial_code": "+420",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
  "license": "Public domain"
},
{
  "name": "Denmark",
  "alpha3": "DNK",
  "dial_code": "+45",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
  "license": "Public domain"
},
{
  "name": "Djibouti",
  "alpha3": "DJI",
  "dial_code": "+253",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg",
  "license": "Public domain"
},
{
  "name": "Dominica",
  "alpha3": "DMA",
  "dial_code": "+1-767",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg",
  "license": "Public domain"
},
{
  "name": "Dominican Republic",
  "alpha3": "DOM",
  "dial_code": "+1-809, +1-829, +1-849",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg",
  "license": "Public domain"
},
{
  "name": "Ecuador",
  "alpha3": "ECU",
  "dial_code": "+593",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
  "license": "Public domain"
},
{
  "name": "Egypt",
  "alpha3": "EGY",
  "dial_code": "+20",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
  "license": "Public domain"
},
{
  "name": "El Salvador",
  "alpha3": "SLV",
  "dial_code": "+503",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",
  "license": "Public domain"
},
{
  "name": "Equatorial Guinea",
  "alpha3": "GNQ",
  "dial_code": "+240",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg",
  "license": "Public domain"
},
{
  "name": "Eritrea",
  "alpha3": "ERI",
  "dial_code": "+291",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg",
  "license": "Public domain"
},
{
  "name": "Estonia",
  "alpha3": "EST",
  "dial_code": "+372",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
  "license": "Public domain"
},
{
  "name": "Eswatini",
  "alpha3": "SWZ",
  "dial_code": "+268",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg",
  "license": "Public domain"
},
{
  "name": "Ethiopia",
  "alpha3": "ETH",
  "dial_code": "+251",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
  "license": "Public domain"
},
{
  "name": "Falkland Islands",
  "alpha3": "FLK",
  "dial_code": "+500",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg",
  "license": "Public domain"
},
{
  "name": "Faroe Islands",
  "alpha3": "FRO",
  "dial_code": "+298",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg",
  "license": "Public domain"
},
{
  "name": "Fiji",
  "alpha3": "FJI",
  "dial_code": "+679",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg",
  "license": "Public domain"
},
{
  "name": "Finland",
  "alpha3": "FIN",
  "dial_code": "+358",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
  "license": "Public domain"
},
{
  "name": "France",
  "alpha3": "FRA",
  "dial_code": "+33",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  "license": "Public domain"
},
{
  "name": "French Polynesia",
  "alpha3": "PYF",
  "dial_code": "+689",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg",
  "license": "Public domain"
},
{
  "name": "French Southern Territories",
  "alpha3": "ATF",
  "dial_code": "",
  "continent": "Antarctica",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Flag_of_the_French_Southern_and_Antarctic_Lands.svg",
  "license": "Public domain"
},
{
  "name": "Gabon",
  "alpha3": "GAB",
  "dial_code": "+241",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg",
  "license": "Public domain"
},
{
  "name": "Gambia",
  "alpha3": "GMB",
  "dial_code": "+220",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg",
  "license": "Public domain"
},
{
  "name": "Georgia",
  "alpha3": "GEO",
  "dial_code": "+995",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
  "license": "Public domain"
},
{
  "name": "Germany",
  "alpha3": "DEU",
  "dial_code": "+49",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  "license": "Public domain"
},
{
  "name": "Ghana",
  "alpha3": "GHA",
  "dial_code": "+233",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
  "license": "Public domain"
},
{
  "name": "Gibraltar",
  "alpha3": "GIB",
  "dial_code": "+350",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg",
  "license": "Public domain"
},
{
  "name": "Greece",
  "alpha3": "GRC",
  "dial_code": "+30",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
  "license": "Public domain"
},
{
  "name": "Greenland",
  "alpha3": "GRL",
  "dial_code": "+299",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg",
  "license": "Public domain"
},
{
  "name": "Grenada",
  "alpha3": "GRD",
  "dial_code": "+1-473",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg",
  "license": "Public domain"
},
{
  "name": "Guam",
  "alpha3": "GUM",
  "dial_code": "+1-671",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg",
  "license": "Public domain"
},
{
  "name": "Guatemala",
  "alpha3": "GTM",
  "dial_code": "+502",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
  "license": "Public domain"
},
{
  "name": "Guernsey",
  "alpha3": "GGY",
  "dial_code": "+44",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg",
  "license": "Public domain"
},
{
  "name": "Guinea",
  "alpha3": "GIN",
  "dial_code": "+224",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg",
  "license": "Public domain"
},
{
  "name": "Guinea-Bissau",
  "alpha3": "GNB",
  "dial_code": "+245",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",
  "license": "Public domain"
},
{
  "name": "Guyana",
  "alpha3": "GUY",
  "dial_code": "+592",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
  "license": "Public domain"
},
{
  "name": "Haiti",
  "alpha3": "HTI",
  "dial_code": "+509",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg",
  "license": "Public domain"
},
{
  "name": "Heard Island and McDonald Islands",
  "alpha3": "HMD",
  "dial_code": "",
  "continent": "Antarctica",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg",
  "license": "Public domain"
},
{
  "name": "Holy See",
  "alpha3": "VAT",
  "dial_code": "+379",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg",
  "license": "Public domain"
},
{
  "name": "Honduras",
  "alpha3": "HND",
  "dial_code": "+504",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg",
  "license": "Public domain"
},
{
  "name": "Hong Kong",
  "alpha3": "HKG",
  "dial_code": "+852",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",
  "license": "Public domain"
},
{
  "name": "Hungary",
  "alpha3": "HUN",
  "dial_code": "+36",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
  "license": "Public domain"
},
{
  "name": "Iceland",
  "alpha3": "ISL",
  "dial_code": "+354",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
  "license": "Public domain"
},
{
  "name": "India",
  "alpha3": "IND",
  "dial_code": "+91",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  "license": "Public domain"
},
{
  "name": "Indonesia",
  "alpha3": "IDN",
  "dial_code": "+62",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
  "license": "Public domain"
},
{
  "name": "Iran (Islamic Republic of)",
  "alpha3": "IRN",
  "dial_code": "+98",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
  "license": "Public domain"
},
{
  "name": "Iraq",
  "alpha3": "IRQ",
  "dial_code": "+964",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
  "license": "Public domain"
},
{
  "name": "Ireland",
  "alpha3": "IRL",
  "dial_code": "+353",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
  "license": "Public domain"
},
{
  "name": "Isle of Man",
  "alpha3": "IMN",
  "dial_code": "+44",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg",
  "license": "Public domain"
},
{
  "name": "Israel",
  "alpha3": "ISR",
  "dial_code": "+972",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
  "license": "Public domain"
},
{
  "name": "Italy",
  "alpha3": "ITA",
  "dial_code": "+39",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
  "license": "Public domain"
},
{
  "name": "Jamaica",
  "alpha3": "JAM",
  "dial_code": "+1 876",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",
  "license": "Public domain"
},
{
  "name": "Japan",
  "alpha3": "JPN",
  "dial_code": "+81",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
  "license": "Public domain"
},
{
  "name": "Jersey",
  "alpha3": "JEY",
  "dial_code": "+44",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg",
  "license": "Public domain"
},
{
  "name": "Jordan",
  "alpha3": "JOR",
  "dial_code": "+962",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
  "license": "Public domain"
},
{
  "name": "Kazakhstan",
  "alpha3": "KAZ",
  "dial_code": "+7",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
  "license": "Public domain"
},
{
  "name": "Kenya",
  "alpha3": "KEN",
  "dial_code": "+254",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
  "license": "Public domain"
},
{
  "name": "Kiribati",
  "alpha3": "KIR",
  "dial_code": "+686",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg",
  "license": "Public domain"
},
{
  "name": "Korea (Democratic People's Republic of)",
  "alpha3": "PRK",
  "dial_code": "+850",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg",
  "license": "Public domain"
},
{
  "name": "Korea - Republic of",
  "alpha3": "KOR",
  "dial_code": "+82",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
  "license": "Public domain"
},
{
  "name": "Kuwait",
  "alpha3": "KWT",
  "dial_code": "+965",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
  "license": "Public domain"
},
{
  "name": "Kyrgyzstan",
  "alpha3": "KGZ",
  "dial_code": "+996",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",
  "license": "Public domain"
},
{
  "name": "Lao People's Democratic Republic",
  "alpha3": "LAO",
  "dial_code": "+856",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg",
  "license": "Public domain"
},
{
  "name": "Latvia",
  "alpha3": "LVA",
  "dial_code": "+371",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
  "license": "Public domain"
},
{
  "name": "Lebanon",
  "alpha3": "LBN",
  "dial_code": "+961",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
  "license": "Public domain"
},
{
  "name": "Lesotho",
  "alpha3": "LSO",
  "dial_code": "+266",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg",
  "license": "Public domain"
},
{
  "name": "Liberia",
  "alpha3": "LBR",
  "dial_code": "+231",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",
  "license": "Public domain"
},
{
  "name": "Libya",
  "alpha3": "LBY",
  "dial_code": "+218",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg",
  "license": "Public domain"
},
{
  "name": "Liechtenstein",
  "alpha3": "LIE",
  "dial_code": "+423",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
  "license": "Public domain"
},
{
  "name": "Lithuania",
  "alpha3": "LTU",
  "dial_code": "+370",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
  "license": "Public domain"
},
{
  "name": "Luxembourg",
  "alpha3": "LUX",
  "dial_code": "+352",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
  "license": "Public domain"
},
{
  "name": "Macao",
  "alpha3": "MAC",
  "dial_code": "+853",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg",
  "license": "Public domain"
},
{
  "name": "Madagascar",
  "alpha3": "MDG",
  "dial_code": "+261",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg",
  "license": "Public domain"
},
{
  "name": "Malawi",
  "alpha3": "MWI",
  "dial_code": "+265",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg",
  "license": "Public domain"
},
{
  "name": "Malaysia",
  "alpha3": "MYS",
  "dial_code": "+60",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
  "license": "Public domain"
},
{
  "name": "Maldives",
  "alpha3": "MDV",
  "dial_code": "+960",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg",
  "license": "Public domain"
},
{
  "name": "Mali",
  "alpha3": "MLI",
  "dial_code": "+223",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",
  "license": "Public domain"
},
{
  "name": "Malta",
  "alpha3": "MLT",
  "dial_code": "+356",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",
  "license": "Public domain"
},
{
  "name": "Marshall Islands",
  "alpha3": "MHL",
  "dial_code": "+692",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg",
  "license": "Public domain"
},
{
  "name": "Mauritania",
  "alpha3": "MRT",
  "dial_code": "+222",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg",
  "license": "Public domain"
},
{
  "name": "Mauritius",
  "alpha3": "MUS",
  "dial_code": "+230",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",
  "license": "Public domain"
},
{
  "name": "Mexico",
  "alpha3": "MEX",
  "dial_code": "+52",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
  "license": "Public domain"
},
{
  "name": "Micronesia (Federated States of)",
  "alpha3": "FSM",
  "dial_code": "+691",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg",
  "license": "Public domain"
},
{
  "name": "Moldova - Republic of",
  "alpha3": "MDA",
  "dial_code": "+373",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
  "license": "Public domain"
},
{
  "name": "Monaco",
  "alpha3": "MCO",
  "dial_code": "+377",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
  "license": "Public domain"
},
{
  "name": "Mongolia",
  "alpha3": "MNG",
  "dial_code": "+976",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
  "license": "Public domain"
},
{
  "name": "Montenegro",
  "alpha3": "MNE",
  "dial_code": "+382",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
  "license": "Public domain"
},
{
  "name": "Montserrat",
  "alpha3": "MSR",
  "dial_code": "+1 664",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg",
  "license": "Public domain"
},
{
  "name": "Morocco",
  "alpha3": "MAR",
  "dial_code": "+212",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
  "license": "Public domain"
},
{
  "name": "Mozambique",
  "alpha3": "MOZ",
  "dial_code": "+258",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
  "license": "Public domain"
},
{
  "name": "Myanmar",
  "alpha3": "MMR",
  "dial_code": "+95",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
  "license": "Public domain"
},
{
  "name": "Namibia",
  "alpha3": "NAM",
  "dial_code": "+264",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg",
  "license": "Public domain"
},
{
  "name": "Nauru",
  "alpha3": "NRU",
  "dial_code": "+674",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
  "license": "Public domain"
},
{
  "name": "Nepal",
  "alpha3": "NPL",
  "dial_code": "+977",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
  "license": "Public domain"
},
{
  "name": "Netherlands",
  "alpha3": "NLD",
  "dial_code": "+31",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
  "license": "Public domain"
},
{
  "name": "New Caledonia",
  "alpha3": "NCL",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Drapeau_de_Nouvelle-Cal%C3%A9donie.png",
  "license": "Creative Commons Attribution-Share Alike 4.0 International"
},
{
  "name": "New Zealand",
  "alpha3": "NZL",
  "dial_code": "+64",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
  "license": "Public domain"
},
{
  "name": "Nicaragua",
  "alpha3": "NIC",
  "dial_code": "+505",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",
  "license": "Public domain"
},
{
  "name": "Niger",
  "alpha3": "NER",
  "dial_code": "+227",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg",
  "license": "Public domain"
},
{
  "name": "Nigeria",
  "alpha3": "NGA",
  "dial_code": "+234",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
  "license": "Public domain"
},
{
  "name": "Niue",
  "alpha3": "NIU",
  "dial_code": "+683",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg",
  "license": "Public domain"
},
{
  "name": "Norfolk Island",
  "alpha3": "NFK",
  "dial_code": "+672",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg",
  "license": "Public domain"
},
{
  "name": "North Macedonia",
  "alpha3": "MKD",
  "dial_code": "+389",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg",
  "license": "Public domain"
},
{
  "name": "Northern Mariana Islands",
  "alpha3": "MNP",
  "dial_code": "+1 670",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg",
  "license": "Public domain"
},
{
  "name": "Norway",
  "alpha3": "NOR",
  "dial_code": "+47",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  "license": "Public domain"
},
{
  "name": "Oman",
  "alpha3": "OMN",
  "dial_code": "+968",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
  "license": "Public domain"
},
{
  "name": "Pakistan",
  "alpha3": "PAK",
  "dial_code": "+92",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
  "license": "Public domain"
},
{
  "name": "Palau",
  "alpha3": "PLW",
  "dial_code": "+680",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg",
  "license": "Public domain"
},
{
  "name": "Palestine - State of",
  "alpha3": "PSE",
  "dial_code": "+970",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg",
  "license": "Public domain"
},
{
  "name": "Panama",
  "alpha3": "PAN",
  "dial_code": "+507",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
  "license": "Public domain"
},
{
  "name": "Papua New Guinea",
  "alpha3": "PNG",
  "dial_code": "+675",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg",
  "license": "Public domain"
},
{
  "name": "Paraguay",
  "alpha3": "PRY",
  "dial_code": "+595",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg",
  "license": "Public domain"
},
{
  "name": "Peru",
  "alpha3": "PER",
  "dial_code": "+51",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
  "license": "Public domain"
},
{
  "name": "Philippines",
  "alpha3": "PHL",
  "dial_code": "+63",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
  "license": "Public domain"
},
{
  "name": "Pitcairn",
  "alpha3": "PCN",
  "dial_code": "+64",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg",
  "license": "Public domain"
},
{
  "name": "Poland",
  "alpha3": "POL",
  "dial_code": "+48",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
  "license": "Public domain"
},
{
  "name": "Portugal",
  "alpha3": "PRT",
  "dial_code": "+351",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  "license": "Public domain"
},
{
  "name": "Puerto Rico",
  "alpha3": "PRI",
  "dial_code": "+1 787",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
  "license": "Public domain"
},
{
  "name": "Qatar",
  "alpha3": "QAT",
  "dial_code": "+974",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
  "license": "Public domain"
},
{
  "name": "Romania",
  "alpha3": "ROU",
  "dial_code": "+40",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
  "license": "Public domain"
},
{
  "name": "Russian Federation",
  "alpha3": "RUS",
  "dial_code": "+7",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
  "license": "Public domain"
},
{
  "name": "Rwanda",
  "alpha3": "RWA",
  "dial_code": "+250",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
  "license": "Public domain"
},
{
  "name": "Saint Barthélemy",
  "alpha3": "BLM",
  "dial_code": "+590",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  "license": "Public domain"
},
{
  "name": "Saint Helena - Ascension and Tristan da Cunha",
  "alpha3": "SHN",
  "dial_code": "+290",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  "license": "Public domain"
},
{
  "name": "Saint Kitts and Nevis",
  "alpha3": "KNA",
  "dial_code": "+1 869",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg",
  "license": "Public domain"
},
{
  "name": "Saint Lucia",
  "alpha3": "LCA",
  "dial_code": "+1 758",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg",
  "license": "Public domain"
},
{
  "name": "Saint Martin (French part)",
  "alpha3": "MAF",
  "dial_code": "+590",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  "license": "Public domain"
},
{
  "name": "Saint Vincent and the Grenadines",
  "alpha3": "VCT",
  "dial_code": "+1 784",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg",
  "license": "Public domain"
},
{
  "name": "Samoa",
  "alpha3": "WSM",
  "dial_code": "+685",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg",
  "license": "Public domain"
},
{
  "name": "San Marino",
  "alpha3": "SMR",
  "dial_code": "+378",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",
  "license": "Public domain"
},
{
  "name": "Sao Tome and Principe",
  "alpha3": "STP",
  "dial_code": "+239",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg",
  "license": "Public domain"
},
{
  "name": "Senegal",
  "alpha3": "SEN",
  "dial_code": "+221",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
  "license": "Public domain"
},
{
  "name": "Serbia",
  "alpha3": "SRB",
  "dial_code": "+381",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
  "license": "Public domain"
},
{
  "name": "Seychelles",
  "alpha3": "SYC",
  "dial_code": "+248",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg",
  "license": "Public domain"
},
{
  "name": "Sierra Leone",
  "alpha3": "SLE",
  "dial_code": "+232",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg",
  "license": "Public domain"
},
{
  "name": "Singapore",
  "alpha3": "SGP",
  "dial_code": "+65",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
  "license": "Public domain"
},
{
  "name": "Sint Maarten (Dutch part)",
  "alpha3": "SXM",
  "dial_code": "+1 721",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Sint_Maarten.svg",
  "license": "Public domain"
},
{
  "name": "Slovakia",
  "alpha3": "SVK",
  "dial_code": "+421",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
  "license": "Public domain"
},
{
  "name": "Slovenia",
  "alpha3": "SVN",
  "dial_code": "+386",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
  "license": "Public domain"
},
{
  "name": "Solomon Islands",
  "alpha3": "SLB",
  "dial_code": "+677",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg",
  "license": "Public domain"
},
{
  "name": "Somalia",
  "alpha3": "SOM",
  "dial_code": "+252",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",
  "license": "Public domain"
},
{
  "name": "South Africa",
  "alpha3": "ZAF",
  "dial_code": "+27",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
  "license": "Public domain"
},
{
  "name": "South Georgia and the South Sandwich Islands",
  "alpha3": "SGS",
  "dial_code": "+500",
  "continent": "Antarctica",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg",
  "license": "Public domain"
},
{
  "name": "South Sudan",
  "alpha3": "SSD",
  "dial_code": "+211",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg",
  "license": "Public domain"
},
{
  "name": "Spain",
  "alpha3": "ESP",
  "dial_code": "+34",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg",
  "license": "Public domain"
},
{
  "name": "Sri Lanka",
  "alpha3": "LKA",
  "dial_code": "+94",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
  "license": "Public domain"
},
{
  "name": "Sudan",
  "alpha3": "SDN",
  "dial_code": "+249",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
  "license": "Public domain"
},
{
  "name": "Suriname",
  "alpha3": "SUR",
  "dial_code": "+597",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",
  "license": "Public domain"
},
{
  "name": "Svalbard and Jan Mayen",
  "alpha3": "SJM",
  "dial_code": "+47",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  "license": "Public domain"
},
{
  "name": "Sweden",
  "alpha3": "SWE",
  "dial_code": "+46",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
  "license": "Public domain"
},
{
  "name": "Switzerland",
  "alpha3": "CHE",
  "dial_code": "+41",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
  "license": "Public domain"
},
{
  "name": "Syrian Arab Republic",
  "alpha3": "SYR",
  "dial_code": "+963",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
  "license": "Public domain"
},
{
  "name": "Tajikistan",
  "alpha3": "TJK",
  "dial_code": "+992",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg",
  "license": "Public domain"
},
{
  "name": "Tanzania - United Republic of",
  "alpha3": "TZA",
  "dial_code": "+255",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg",
  "license": "Public domain"
},
{
  "name": "Thailand",
  "alpha3": "THA",
  "dial_code": "+66",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
  "license": "Public domain"
},
{
  "name": "Timor-Leste",
  "alpha3": "TLS",
  "dial_code": "+670",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg",
  "license": "Public domain"
},
{
  "name": "Togo",
  "alpha3": "TGO",
  "dial_code": "+228",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg",
  "license": "Public domain"
},
{
  "name": "Tokelau",
  "alpha3": "TKL",
  "dial_code": "+690",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg",
  "license": "Public domain"
},
{
  "name": "Tonga",
  "alpha3": "TON",
  "dial_code": "+676",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg",
  "license": "Public domain"
},
{
  "name": "Trinidad and Tobago",
  "alpha3": "TTO",
  "dial_code": "+1 868",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",
  "license": "Public domain"
},
{
  "name": "Tunisia",
  "alpha3": "TUN",
  "dial_code": "+216",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
  "license": "Public domain"
},
{
  "name": "Türkiye",
  "alpha3": "TUR",
  "dial_code": "+90",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
  "license": "Public domain"
},
{
  "name": "Turkmenistan",
  "alpha3": "TKM",
  "dial_code": "+993",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",
  "license": "Public domain"
},
{
  "name": "Turks and Caicos Islands",
  "alpha3": "TCA",
  "dial_code": "+1 649",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg",
  "license": "Public domain"
},
{
  "name": "Tuvalu",
  "alpha3": "TUV",
  "dial_code": "+688",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg",
  "license": "Public domain"
},
{
  "name": "Uganda",
  "alpha3": "UGA",
  "dial_code": "+256",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
  "license": "Public domain"
},
{
  "name": "Ukraine",
  "alpha3": "UKR",
  "dial_code": "+380",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  "license": "Public domain"
},
{
  "name": "United Arab Emirates",
  "alpha3": "ARE",
  "dial_code": "+971",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
  "license": "Public domain"
},
{
  "name": "United Kingdom of Great Britain and Northern Ireland",
  "alpha3": "GBR",
  "dial_code": "+44",
  "continent": "Europe",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  "license": "Public domain"
},
{
  "name": "United States",
  "alpha3": "USA",
  "dial_code": "+1",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  "license": "Public domain"
},
{
  "name": "United States Minor Outlying Islands",
  "alpha3": "UMI",
  "dial_code": "",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  "license": "Public domain"
},
{
  "name": "Uruguay",
  "alpha3": "URY",
  "dial_code": "+598",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
  "license": "Public domain"
},
{
  "name": "Uzbekistan",
  "alpha3": "UZB",
  "dial_code": "+998",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
  "license": "Public domain"
},
{
  "name": "Vanuatu",
  "alpha3": "VUT",
  "dial_code": "+678",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Vanuatu_%28official%29.svg",
  "license": "Public domain"
},
{
  "name": "Venezuela",
  "alpha3": "VEN",
  "dial_code": "+58",
  "continent": "South America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg",
  "license": "Public domain"
},
{
  "name": "Viet Nam",
  "alpha3": "VNM",
  "dial_code": "+84",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
  "license": "Public domain"
},
{
  "name": "Virgin Islands (British)",
  "alpha3": "VGB",
  "dial_code": "+1 284",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_British_Virgin_Islands.svg",
  "license": "Public domain"
},
{
  "name": "Virgin Islands (U.S.)",
  "alpha3": "VIR",
  "dial_code": "+1 340",
  "continent": "North America",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg",
  "license": "Public domain"
},
{
  "name": "Wallis and Futuna",
  "alpha3": "WLF",
  "dial_code": "+681",
  "continent": "Oceania",
  "file_url": "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  "license": "Public domain"
},
{
  "name": "Yemen",
  "alpha3": "YEM",
  "dial_code": "+967",
  "continent": "Asia",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
  "license": "Public domain"
},
{
  "name": "Zambia",
  "alpha3": "ZMB",
  "dial_code": "+260",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
  "license": "Public domain"
},
{
  "name": "Zimbabwe",
  "alpha3": "ZWE",
  "dial_code": "+263",
  "continent": "Africa",
  "file_url": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
  "license": "Public domain"
}
  ];
  constructor() {}
}