import {Plus, Dot } from "lucide-react";
import Layout from "../components/Layout";
import TaskCard from "../components/TaskCard";

function VitalTask() {
  return (
    <Layout>
      <div className="flex-1 ">
        <div className="bg-white px-20 flex justify-between border-2 min-h-screen gap-5 ">
          <div className="w-[45%] flex flex-col items-center p-5 gap-5 border-1">
            <div className=" flex flex-col p-2 w-full mb-3 gap-4 px-5">
              <div className="flex flex-1 justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-block border-b-2 border-red-500">
                    Vital Tasks
                  </span>
                </div>
                <button className="text-gray-400 flex gap-1">
                  <Plus className="text-red-500" /> Add task
                </button>
              </div>
              <div className="flex flex-1 space-x-2">
                <span className="text-black">20 June</span>
                <span
                  className="
                text-gray-400 flex"
                >
                  <Dot /> Today
                </span>
              </div>
            </div>
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </div>
         <div className="max-w-2xl mx-auto p-6 flex flex-col gap-6 bg-white rounded-xl shadow-md">
  
  {/* Header (Título e Imagem) */}
  <div className="flex items-center gap-4 border-b pb-4">
    {/* Imagem do Cão */}
    <img 
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEBIVEBAQFRAVFg8PFQ8VFRUVFRUWFhUVFRYYHSggGBolGxUWITEiJSkvLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0fHyUrLy0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0rLS0tLS0tLS0rLS0tLf/AABEIAL4BCgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EADsQAAICAQMCBAQDBgUDBQAAAAECABEDBBIhBTEiQVFhBhNxgTKRoRQjQlLB8AcVsdHhcoLxFjNikrL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAlEQEBAQEAAgIBAwUBAAAAAAAAARECEiEDMUEEUWEUIjJxgRP/2gAMAwEAAhEDEQA/ALZXk90UDyXzJ5Gu8ctA5HnC8C7RaHHeDLSLNI3DQJukt0FPQMdXhA0WBhVMm0DXJAwVzwMXkBrkSZDdPAwnQReBaHaBYSpSBcQLiMPAsI9TSziDAh2EHUCcMG8YxYixCqLZjQA8zNL0f4Uun1Hbn92P0LH+g/Pyl8fH13fRXqRkcOkyZDWNGc//ABBMsx8K6kLuZQgo8FlJ7XXhupv8eLHjTbjUKt9lAEWx5yzlBzY5nV/T88z3UTq2vl4k5LOPG3n4m5H1MjU4/poiRBmFIg2WToSVoVTAAQqGVDgtQbLC3ImWCeVIKo46wG2Ia1U9JAT1TPVIEwTGFYQTSDDaeE8RJKJUJ6cEmRIQoSEKhghCqJj1TFkZ4GeilJy5JZGoRFlhFoMiM/Llz0Pooc3kB2+XoZfx8Xu5E9dSMw6mdw6ZnNIpYn0E+j6/pGncLuUWo8uLArvX0kdLjRR+6UKLrgTsn6W77rL/ANNYbF8N6hiBs2gnksRxI6j4Y1K/wbv+kgz6BlPp7w6EevI8pp/T8DyrJ9B6B8kjI/OTj6LzyB+nM0muyBQCOx/2JhXS5RfEmX5eO6LV2UdyfKh5zbmTiZC/yqq6z1n5Sk+XpFel6tmxPmYHdtcgDt2NWe32Eosa/tWX9/eMDsLPf3HaafUrix4GC82pUG+Pf9PKZd9W+215z0xAWdMMUg2E4qQZnanGE6kzodVJIY4VBDKkcuKhScLRh8cXdJpKVQYwdSZE5tjQ1CiSqRE7cxaIOIIrDkSNRGDsntsNU4VjIEyBhWEGRGTymGWBEKokXganOXPGRinI0VYziSLYzHP2v5S7wu5uw9B6kzTnjyuFq10egA8WSgPRpYr1NUHHO0eVf6TGf5hly2b5PYf1Me0qnHiJc7mavrZnofHJxMibz+68bqoPPNnyMsOk5S1gjiU2HKuJNzm+L8q94H4V+L8WpynHj5PO0ryGA7kEcED1HHE1lZ2fs0eu8PJ48/0P/ElpCDZuM63BuUX3sflfMQ1ujZF3IDursPOPAdxEHtPZtOGHIB95856X8V6xdScTaNyhyAccUh/js+EkccX682KP0RPmsOVC+5NxBQ5fhzEHOQEh+/PN1KDr+tRwqryV7tVCvSvWbTqTEIe1V3N1Pnmrx0x8Qf3Wc3z+mnPV+iRSCbHG6kGWclUTZIOo0ywDiICYzGUiKGN4misVBSkBkxxsTjLHKKrWxyOyOukHsl6nFtunbkCZ7dFhxPdJCCuTEnDTkWnrnDJIFzBEwrwREqEksOkCoh0jDjQRMOywLJCQPI8Zzm8fa6INfnFAkewJuBX+YEX7y+fXUpFNLk54WiPQ/ao11nKVwEqNzBkNHzoi/txKzA5RtjHxccS2w/vdy+WMbufcba/W/tOm3+1f1UeodJOpwlc7socC1Qkcd697lr/h/wDDeDSl8gFs3ByOSxruQo7Lz7D7z37SqqNzcmtorzMPrsu3AyBiCVPIvuRxzN/jzMjDu37onWf8QtHhZsat8x0NEILVT9e0Y6b8RjNRutwujtNj7XPgXWeharCS2RHIcb94FqQSeSQfaa7/AA2xpjJfY2JshsIzhl55tfCK+hszWyI5fZzgxsQ1UfXzje70lX0/NuPPt5f1i764Lm2U9nndbbPtzUj6V9ntVpdwZfJweDVflPnnUNGcblCQSPTj9J9J02S/eZr4p6covIoA57KAL9SZj83G86fN9seRIGMMsXcTixoGwi+WMGBcRYNLiGRoMidWGGdx5JPfEw0l8yFhju0HugWywXzJIXbyNwT5JA5JoRjfCK0R+ZDY8kVg0zc7cFvng0nAk8CRCGcURyB4CGxidCQqJGHQsgUjCie2xGXGOM4cdSSpGcSwGFtf035gDqP3i+XrGdD004cHjr5mQ21HtX4V96v8yZZaRYXqSWtTo+Lb6T1cjNudvNbmXtft2ndRrfmIMiMGAsEeQYcc+wMO4G7nuRXtcx3xF0vKqMdOzKWsFVYi/MEe4JP5+0fx9+PWafXOzQ/iL4m24mwsvzHHCgEghTf4iOw5PEpOkfFrrW7TqWAUbkLCyKA4+k90/V6VeNcrh2OT99jRSa3cb0Fe445485qOh6vpQ2nBvz5EIYbsbKLHotE2LsXxYHM65erFc/H8WeXl/wA/K/6V8ZNlBTFiYZVsEP2DHgDg9zxx9Ze9K0j4lY5nOR3LNR/hs3tHsO32iXw10yg+R8QwgENjAWlUbQCfXceST7y0Q4r3nkntZ5i79emHpZdM4Xni+w9veIfE6/uvxcX2559uI5pms0IfqGlL4ytA2OzesWbzhX7fOGi7iO63AyMVYbT6RQzgsytQmWAdY2RAusRE3EjDusGwjw0C0gXnWg3iCGTJA/NnssBFhWr5nkN8hc4Yxqe+ETJFSJNIy08jwqNFEMYxmJQ8IggN0krwM4sKkTXLGMeWIx50QJyzgyyTMBoxiMRXJD4skRrnTNHs5G2zKjTZJY6rLwB7Tr/TTbrH5fpW6vEGEpX8BpxvQ+V8j6S3zn3qJZce7zuT8vHvYv4+vWKbUdF0zDfixo20jwt9e9Hv/wAektegdPwYiGOMAi/Du4/ESK/7TX2+krtXpwgv8hff+7jfT8nKEKSLU19O/wDftL4+bv8AI6+Ofht85GVbcbV4ASyPpfrKTTMxJWgACRwSR+V8S5/Z96JZoigK9PK/0ktDpVQUR37/AF850ZrHcM9OwKq2O57mOEwGBAO36QtVLnpJDqXTUzAgqAf5vOfP9fpTicofKfTrmL+NNJTjIAaPc/6TH5+ZedXzfbOmBedOSBfLOJohlMA7yObLFXzwLRi0ixivz5IZYi1JxA1DFoO4wsxJAQyYoUYoYkoVnlEbOGc+TAwLhUad+VJDFAa8XgmzSbIYFsceHro1EYTURBsZk0isHksBnnfnRQTsWH5GlzxjHmiKCMIIYfkuOnZrYCWObLZMqemd47kyTu/Tc5xax+S7S+YL/Ff2k8eRKteKH5CRV/YH6x3T6Y5BSrQ83J8I+nAuO8nKTx6P5g3VxttQf7+s5pNPzVdrJ/I8fSao9NCKB3ND/TiU2DIL991bSDfIN37UZPhIvz05pM52Ba5TvV/zDbx9POPplDHng/1EU0pBYMo8NUbq7E7qgyv4ACrAWT6jg/pNJ9Iqx+dt7cwuJr7nmJaeq9z6woFdhKScLSr+JcYbA27sBcssIuB16bkZe5ox2bA+PNmi2XND6zEQ7D0JH6xPIs8zGml82aJ5M8Zy44rkwxyJtC+fCpngDgk1xmOwtNrmnvmwAScqLD1vV08IMMcGOT+VKwaS+TPHBHhinflwwarv2ee+RLH5UkuGGFqsOmkDpJb/ACZ35MeHqibRzn7JL35E5+zwwlJ+yz37NLk6eeGniwKlNPGE08sk00Pj00eDSmmxUDIE+stW09KfpKXKfRSfpOr4bnCL7rqZBdDkDyE0GiYGtzCh7i/T7CZtbbgDaB6cmCya8Y2AJ8xzxxJveX21nOtb1TqATaUu+/iJ8xVe5/3EH0nU48jWRTmwa8qsSpGoVlI3XQXjzJryHpIfD2qA1BLcXusr6ni/vxK3aM9NRi0+x2/lv/m4HW6sLzdcmvsOYxrcpobVsNQB7eoP3mY6nl25trWaF0O3JuvrNPqJ+2gVyy8Daf75h9KW7NyRKrR6vsGQ123D0+glppMpPYAr5d/6xks8UW1hoObrwmN4L8xUrfiPOExEeb8CO3JpPmOpwWxNdyYs2ll8dPBnBPPxeqL9igH0U0XyZxtPDC1mm0XtBHSTSNpou2m5hgUZ0kh+yS//AGae/ZY8DRAwgMWBnQ9Q0jYE4ZFXkHyXAPM0NjMCBcMimAFk0WBYwiZIwLskSk98yTXmMBBfaS+XDrjnWWGAPHjjCY4NWhEyxkMy+EzP6jv6D8ppsZBlP1hCPIAewm3x38EqinNL2PciG/ylWHI5MFgzf2Y9g1FH1EWS1rtij1WlOA7v4fuePST6TnBJPY7ufob/AOJsMegXMnIvdxM7qvhTLhybsZJQ918x9/MR+Fn0flLGm6XqGZArnkWL8yPI/WUWpWnZ35B7sPyBYX/pK9urlCV9AVtfqO3p2Mhq+reI8VwF2n0YVz+Rl+UxnlWWPOyk+IChakEUw9CJc9P6hjcDY4U+YJ7H6TFdLyK+4Mbo8A9yJoOlaMKRa/Y+kmdU7Gx02Qn8Qo+3YxH4o0m7DuHdDf27GOaalFeXlJdUIOF/+kzTr3MqWAEFkFQ4SByLzODTDuRytUPsoRDO9mG4MTLwbsLkWHEVyZYaDisJzeJXjPBfPMejWk3TheDucxIT2k0xBlnQ0WdCDGsSWOYoWn9OOIwqxLTNGgxlaaT44JsZEIGMNxXMCJBTcZxZQIvqM1EACyfSTwupFMjBvXyhAeXMIvqM1SCVc7mAMfl6CCZTPHLXM62E1chlx0L9ZNtCw0+rh8uYEUeZW4MBjIxx+VCo1+hZTvFFPa/1iDaryB4E1yoKIPIImU6v0843sCgfSac9WxXN/FXfSuugKFuq/wBAST/f0mr0esD/AH/v/afI21FHiaz4X6ruG0nxCufby/OzL4+XblX1x6I/H2hx6Z/nk1jyGyo8iO4H17feYlNa2YlyKBPAHp5T6n8a9JGr0brVvi/eIfdeSPutifMdLjoAAccHtzK+RPKx6ZW4X+s2fTc54sjaoskkeUzvTekEjcKryP8AxEuvatrGDGTsClmYfxEeX0i59C19E0Gf5zWD4R2rsZb5gTjYH0mZ+C8qnEBRsTVZrKHbya7TSJrA5H2sVMDkPMjqsxOa3XZRPB9Pee1T8Bl7GcYSyvxUQVLMn83dlX2FyK8fWIBasMKH8Nd/eIfLLcCP6rKWXjyMren6sqTfcHtHUovgKmj3hBhkeo5CWB9fT25gP24SdynGwOiJY+ghMGPaajenO2786P2i2o1I2sVresqyHhptCD5d4PVafYOO0dfWAYt3cVfEVx6lXoeRrv7ixHZBgGFJzLm5oDkR7I+NE3WPOoNNhojgtZF/b/cReJO4jS8jmD1T+HiL49eSShH4G2Ht6Xf5T2h1SMWG4N8sE0CD2/8AEL79GPhwkLubuYTS83ZlD8R9UY4f3TfgYXXp3nOm9XrHvdlINeFe4PvF42UtWmqyANVw2PGavyqVWj6vgzKzE0qeZ8qPf6f7xnL1MIQimwR3kzn37LV2mVaAPcyv12cAlTwV5qVms1Stjc79rrTIR+koz175hDZBeRcbBx7Ad5fUth63Oj1F41JFE+XtFRrayFbuxYmL0vxmBjKtw4Ubee/kREn+JN+Xb24C7h5sf6QsuFsfVkoJuu7IqA6nphlxk+ajiZvS9cVsS4yTasg4q+DRNHvGNFqiUyZPm1i3ONpNMwW72+nY/wB8xTvOvRs5lW78iDR+ojvw6rDLV17evpf5xHUMu53x8KCAV9PMfmDf3ktB1HY4JoD1vt52ZXUnlsbc9f2vquhYbQp8hX5cH+s+d6fpqpnyYmb/ANlyAR6HkfoR+cufhPrD5cz48gKblDpu77TYBPvzf/iJ9Ky4tRmfI60zPlZco4VlG2lc/wA23sf6czbruZET0a6ovy8YwYuMmQE3fZP6XzMl1PJsRWI8VhWPoLB/pU0HUtO+fJlBcBlAZMmM3QPhbGw7g8AEe471KY6cqvyMillbaNwBZSrNQbd5mzYr0mV6vlv4TPte/B3UAXBBKgt28jweJ9Gx5Bur+ZSw/wC0gN/+l/Mz4r0HG2PNsUng0Sdo4bjaOfERY59R6cnf9M+KsbY0fJatjYk9qoWr+9BST9VmvHyTcPpV9YUvqcpB8K0P0PH/ANgZUdSDqSB4QKNny3Dn/SaTW4sGTLlyYsoX93jyFG/io5d1fkJTdXXEzZkd7ARadedrtY2gfxUbmPcvuoe0OPG5AB8aqDXrfYRL5gatptqPB459PzlXhztjyMzncSKIFgbb22P0lxjxI+NGUEOMqFk4G4cjdfkL2k/eRuw3dBoSDtZgzlbJHYdv+ZW5dHtyMSw5IA+sdc7UXYdzcDcvfcCVB+nFfX6iKa3XKmNmYWSGU7qG4Ll2MFqvFRU/rK/geh9Hpd/zfJsYCLfmSA7/AKbR9jHMOux7RbYLoXxj71KvoxyEWQQHPCObJdmIdi1cqC4H6cdivk+IsKEqDQUla44rio/9D1GszZnCbgVcABm5/gBPPse/HlKXD1JGd/CwG1iQQeKoEV63fEsem41HzVbxqEZWVgKK5EfgenYxs9EXHt+WRWPK1hhdoatT6+gJ7CL7g90g/U9hKBWfFSgUKux3/X9ZLF1BTarwACxuvwoy0L9dm/8AKQ6toxjzKWYsVOPYABtDbgAT6jgcQmHRIub5dcEEhhwRuVh9/wAZk/kZVNm1mTKDjYbXRUyBWuhTU4vz7Rt+ptSYyttkQ1deEBqY+/8ACeOe0c1eIDJRHPNEcnxHcSSfWya7c+0X1eStQFAG1QSLAvgbe8q9fwLsV2lRsLlAW+Z83FuLk+IU/wA2/YcC/QA+cXGoyo2bGDsrwAdgoIIH2o3c0esxrvZmFtkQU3mAKsfftHsnTseQJkI7bAwNeIDjxEd4fd9JsfNcOLNsdse6sdB7seHybn7x3qHRs+II/L43H4lJKgkUO3Y3zR9PefSdBiGPKwUcKNgB5O3ezDk+fir7CL4dGCwQk7dpA7Hi+Qb7/eX11mK8cYFei5GUuSMeHIiJZO3xA9ytcjb3PqREtPr8uxQwtaba3m1Dv9J9J1PTVDBTTL4vCb8wV+1bvpxEOl6PbkO/ZkxZgu1WRNyFHB/FVkexPBJhL79ljBdOOTMdi7mJZVF3wTZX7EjbfqR6iwdP+Ycjlt25VzBgbFfu3HiB7UfX0n0fD0zEmf5qqUZjlUKhOym8yp7G18jXMX6joVyZFalBYeMUAHI3AlgO5Ifn6d4XuDHzc9CzOGZeQlMSKN35rX4hRHb1EFl6dlGIZKPBO2qBbbbNz6LXPc2yjzn1T/LEVPDahbAUVRFC7v6L979Yr/l6PiAKgDCEoCu7ndwav0PN8gelknf7ljL9G0GRMyb2UEHccYNkcMLP3U9u9H0l6ems6fuyUZSXKnaEyFt3gRga3d/61LfR6ZNy2KIW9wCX4R9PPzntRjU4rIvbtIB8+TtB9PxG/Mjjymdy208UOTpeRkLYltmRC2I1utTRB/iLLRHf+X1kf/TuN8W8ZDpiu0suYF0G5uC4HiTg1dEefEv8a+wNq+0nyDY6YfS1nVSwdnBH491UQbFCwbXwm1NdhzFLMyKin1Olz4PmZ1YO+PCE34iMm4M3hcbfwkDd+ID8PnIdB1jZNLaFA2E4wTt8LIrIA1AcNtJo+ovtLbFmCNs8RKogXn8O3wkq34u4HFnufWIdLUqz1zd3ZNGwRRHZu/6Q6y5Rd0bR6k77zAhctb0Q8huaKt5g9/z+0UVx8zezPiQeHdRrc1XxyLLXY9I5pQWQIarbakd1A8r9gxqFbQkIDY8Nkd/wh0LofYlARHJS/LLavCxJxoDj20d1Et4VNADzJJC2PUehl3otGBjXHkFFEAUrbAMpp8d34qFg9uR9Ixk0A4o8lWyEn8z28/Q+8LlFhcjcsFKkeRLcBh6Ht9hHJh5VZm6egvE5LBGDK4NOpXlB7kha/P1nugsr53P4/lJl2pk43ZGu91cclz5cUYzqsq7Rkdd9EqwN8jjt6GUr5CuTI+MlebHlxXAP2qLy/JWp63UKFAoLy1V5nd4vpyO3vAYNTlejmATEgKY3A7MLIBrizz5frAdSJd7PcAE+hYmyfzj2Wl2o4DKeQB69+ZGlbtQHWxuIK/LJCsoWqq/Eor197hceXfh/eKNpyABmA4DcsR6GtvPlEh05SWyNyQQqgeW494xo8TBdxa9jmhXFC1Ii2+R/ftYPkyJsZFtT/ECpA8RyOWvuSaFfeZ9Ph5iASOSATTL3/OaNh4WQAAFdw+4qq8u8zvyiOPmZOOOGmk6weOv/2Q==" 
      alt="Cão Cocker Spaniel" 
      className="w-28 h-28 object-cover rounded-xl shadow"
    />
    
    {/* Título e Detalhes */}
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-gray-800">Walk the dog</h1>
      <div className="mt-2 text-sm space-y-1">
        <p>
          <span className="font-semibold">Priority: </span>
          <span className="text-red-600 font-bold">Extreme</span>
        </p>
        <p>
          <span className="font-semibold">Status: </span>
          <span className="text-gray-600">Not Started</span>
        </p>
        <p className="text-gray-500">Created on: 20/06/2023</p>
      </div>
    </div>
  </div>

  {/* Corpo da Descrição */}
  <div className="flex flex-col gap-4 text-gray-700">
    <p className="text-lg font-medium">
      Take the dog to the park and bring treats as well.
    </p>

    <p className="leading-relaxed">
      Take Luffy and Jiro for a leisurely stroll around the neighborhood. 
      Enjoy the fresh air and give them the exercise and mental stimulation 
      they need for a happy and healthy day. Don't forget to bring along squeaky 
      and fluffy for some extra fun along the way!
    </p>
  </div>

  {/* Lista de Subtarefas (Checklist) */}
  <div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">Checklist:</h3>
    <ol className="list-decimal list-inside space-y-1 pl-2 text-gray-700">
      <li>Listen to a podcast or audiobook</li>
      <li>Practice mindfulness or meditation</li>
      <li>Take photos of interesting sights along the way</li>
      <li>Practice obedience training with your dog</li>
    </ol>
  </div>
</div>

        </div>
      </div>
    </Layout>
  );
}

export default VitalTask;
