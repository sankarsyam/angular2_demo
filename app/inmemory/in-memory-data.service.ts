import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let employees=[
            {id: 1, name: 'Syam Sankar',email:'syam.sankar2@cognizant.com',mobile:'9446781556',username:'syam',doj:'01/01/2014',state:'Kerala',country:'India',password:'password'}
        ];
        let states=[
            {
                "id": "1",
                "name": "Andhra Pradesh"
            },{
                "id": "2",
                "name": "Arunachal Pradesh"
            },{
                "id": "3",
                "name": "Assam"
            },{
                "id": "4",
                "name": "Bihar"
            },{
                "id": "5",
                "name": "Chandigarh"
            },{
                "id": "6",
                "name": "Dadra and Nagar Haveli"
            },{
                "id": "7",
                "name": "Daman and Diu"
            },{
                "id": "8",
                "name": "Delhi"
            },{
                "id": "9",
                "name": "Goa"
            },{
                "id": "10",
                "name": "Gujarat"
            },{
                "id": "11",
                "name": "Haryana"
            },{
                "id": "12",
                "name": "Himachal Pradesh"
            },{
                "id": "13",
                "name": "Jammu and Kashmir"
            },{
                "id": "14",
                "name": "Jharkhand"
            },{
                "id": "15",
                "name": "Karnataka"
            },{
                "id": "16",
                "name": "Kerala"
            },{
                "id": "17",
                "name": "Madhya Pradesh"
            },{
                "id": "18",
                "name": "Maharashtra"
            },{
                "id": "19",
                "name": "Manipur"
            },{
                "id": "20",
                "name": "Meghalaya"
            },{
                "id": "21",
                "name": "Mizoram"
            },{
                "id": "22",
                "name": "Nagaland"
            },{
                "id": "23",
                "name": "Orissa"
            },{
                "id": "24",
                "name": "Punjab"
            },{
                "id": "25",
                "name": "Pondicherry"
            },{
                "id": "26",
                "name": "Rajasthan"
            },{
                "id": "27",
                "name": "Sikkim"
            },{
                "id": "28",
                "name": "Tamil Nadu"
            },{
                "id": "29",
                "name": "Tripura"
            },{
                "id": "30",
                "name": "Uttar Pradesh"
            },{
                "id": "31",
                "name": "Uttarakhand"
            },{
                "id": "32",
                "name": "West Bengal"
            }
        ]
        return {employees,states};
    }
}


