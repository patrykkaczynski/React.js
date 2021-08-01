import React, { useEffect, useState } from 'react';
import { Form, Input, Row, Col, Divider, Card, Select, Image, Alert } from 'antd';
import './App.css';
import Button from "antd-button-color";

const FormOrder = () => {
  const [valueName, setValueName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
  const [valueDish, setValueDish] = useState("");
  const [valueDishKind, setValueDishKind] = useState("");

  const [data, setData] = useState([
    {
      name: "Ala",
      lastName: "Nowak",
      dish: "Pizza",
      dishKind: "Hawajska"
    }
  ]);

  const [notification, setNotification] = useState();



  useEffect(() => {
    document.title = `Ilość zamówień ${data.length}`;
  }, [data]);



  const layout = {
    labelCol: { xs: { span: 24 }, sm: { span: 10 }, md: { span: 10 }, lg: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 14 }, md: { span: 14 }, lg: { span: 14 } }
  }

  const tailLayout = {
    wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 6 }, md: { span: 12, offset: 8 }, lg: { span: 8, offset: 10 } }
  };


  const dishes = ["Pizza", "Burger", "Zapiekanka", "Hot dog"];
  const arrayDishes = dishes.map((dish) =>
    <option key={dish}>{dish}</option>
  );

  const handleInputName = (event) => {
    setValueName(event.target.value);
  };

  const handleInputLastName = (event) => {
    setValueLastName(event.target.value);
  };

  const handleChangeDish = (event) => {
    setValueDish(event);
  };

  const handleChangeDishKind = (event) => {
    setValueDishKind(event);
  };

  const pizzaKinds = ["Bianca", "Diavola", "Primavera", "Quattro", "Wiosenny smak"];
  const hamburgerKinds = ["Awokadus", "Chorizard", "Gonzales", "Standard Vegan", "Wiesio",];
  const bakeKinds = ["Europejska", "Kanadyjska", "Pepperoni", "Swee-heat"];
  const hotdogKinds = ["El-chapo", "Gorol", "Napoli", "Onion", "Pizza"];

  let type = null;

  let options = null;

  if (valueDish == "Pizza") {
    type = pizzaKinds;
  }
  else if (valueDish == "Burger") {
    type = hamburgerKinds;
  }
  else if (valueDish == "Zapiekanka") {
    type = bakeKinds;
  }
  else if (valueDish == "Hot dog") {
    type = hotdogKinds;
  }

  if (type) {
    options = type.map((el) => <Select.Option key={el}>{el}</Select.Option>);
  }

  let image;
  const imageDisplay = function (valueDish, valueDishKind) {
    if (valueDish == "Pizza") {
      if (valueDishKind == "Bianca") {
        image = <Image width={250} src="./Images/bianca.png"></Image>;
      }
      else if (valueDishKind == "Diavola") {
        image = <Image width={250} src="./Images/diavola.png"></Image>;
      }
      else if (valueDishKind == "Primavera") {
        image = <Image width={250} src="./Images/primavera.png"></Image>;
      }
      else if (valueDishKind == "Quattro") {
        image = <Image width={250} src="./Images/quattro.png"></Image>;
      }
      else if (valueDishKind == "Wiosenny smak") {
        image = <Image width={250} src="./Images/wiosenny_smak.png"></Image>;
      }
    }
    else if (valueDish == "Burger") {
      if (valueDishKind == "Awokadus") {
        image = <Image width={250} src="./Images/awokadus_maslana_new.png"></Image>;
      }
      else if (valueDishKind == "Chorizard") {
        image = <Image width={250} src="./Images/chorizard_xl_new.png"></Image>;
      }
      else if (valueDishKind == "Gonzales") {
        image = <Image width={250} src="./Images/gonzales_new.png"></Image>;
      }
      else if (valueDishKind == "Standard Vegan") {
        image = <Image width={250} src="./Images/wegan_standard_new.png"></Image>;
      }
      else if (valueDishKind == "Wiesio") {
        image = <Image width={250} src="./Images/wiesio_new.png"></Image>;
      }
    }
    else if (valueDish == "Zapiekanka") {
      if (valueDishKind == "Europejska") {
        image = <Image width={250} src="./Images/europejska.png"></Image>;
      }
      else if (valueDishKind == "Kanadyjska") {
        image = <Image width={250} src="./Images/kanadyjska.png"></Image>;
      }
      else if (valueDishKind == "Pepperoni") {
        image = <Image width={250} src="./Images/pepperoni.png"></Image>;
      }
      else if (valueDishKind == "Swee-heat") {
        image = <Image width={250} src="./Images/swee-heat.png"></Image>;
      }
    }
    else if (valueDish == "Hot dog") {
      if (valueDishKind == "El-chapo") {
        image = <Image width={250} src="./Images/el-chapo.png"></Image>;
      }
      else if (valueDishKind == "Gorol") {
        image = <Image width={250} src="./Images/gorol.png"></Image>;
      }
      else if (valueDishKind == "Napoli") {
        image = <Image width={250} src="./Images/napoli.png"></Image>;
      }
      else if (valueDishKind == "Onion") {
        image = <Image width={250} src="./Images/onion.png"></Image>;
      }
      else if (valueDishKind == "Pizza") {
        image = <Image width={250} src="./Images/pizza.png"></Image>;
      }
    }
    return image;
  }


  const handleClick = () => {
    const newData = [...data];
    newData.push({
      name: valueName,
      lastName: valueLastName,
      dish: valueDish,
      dishKind: valueDishKind
    });
    setData(newData);
    const notification = <Alert
      message="Dodano zamówienie"
      description={"Liczba wprowadzonych zamówień: " + (data.length + 1)}
      type="info"
      showIcon
    />
    setNotification(notification);
  }


  const handleDeleteClick = (index, count) => {
    return (event) => {
      let newData = [...data];
      newData = newData.filter((value, i) => i !== index);
      setData(newData);

      const notification = <Alert
        message="Zrealizowano zamówienie"
        description=""
        type="success"
        showIcon
      />
      setNotification(notification);

    };

  };


  return (
    <>

      <Divider orientation="left">Wprowadź zamówienie</Divider>
      {notification}
      <Card className="card-order" type="inner">
        <Row>
          <Col flex={3}>
            <Form {...layout}>
              <Form.Item label="Imię" name="username-label" hasFeedback rules={[{ required: true, message: 'Proszę wprowadź swoje imię!' }]} value={valueName} onChange={handleInputName}>
                <Input />
              </Form.Item>
              <Form.Item label="Nazwisko" name="surname-label" hasFeedback rules={[{ required: true, message: 'Proszę wprowadź swoje nazwisko!' }]} value={valueLastName} onChange={handleInputLastName}>
                <Input />
              </Form.Item>
              <Form.Item label="Danie" name="dish-select" hasFeedback rules={[{ required: true, message: 'Proszę wybierz danie!' }]}>
                <Select placeholder="Wybierz danie" onChange={handleChangeDish}>
                  {arrayDishes}
                </Select>
              </Form.Item>
              <Form.Item label="Rodzaj dania" name="dish-kind-select" hasFeedback rules={[{ required: true, message: 'Proszę wybierz rodzaj dania!' }]} >
                <Select placeholder="Wybierz rodzaj dania" disabled={valueDish === ""} onChange={handleChangeDishKind}> {options} </Select>
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="info" htmlType="submit" onClick={handleClick} disabled={(valueName === "") || (valueLastName === "") || (valueDish === "") || (valueDishKind === "") ? true : false}>
                  Wprowadź zamówienie
                </Button>
              </Form.Item>
              <Form.Item>
              </Form.Item>
            </Form>
          </Col>
          <Col flex={2}>
            {imageDisplay(valueDish, valueDishKind)}
          </Col>
        </Row>
      </Card>
      <div className='container'>
        {data.map((dataItem, index) => {
          return (
            <Card key={index} className='card-order' title={"Zamówienie " + (index + 1)}>
              <p>Imię: {dataItem.name}</p>
              <p>Nazwisko: {dataItem.lastName}</p>
              <p>Wybrane danie: {dataItem.dish}</p>
              <p>Rodzaj dania: {dataItem.dishKind}</p>
              <Button type='success' onClick={handleDeleteClick(index)}>Zamówienie zrealizowane</Button>
            </Card>
          )
        })}
      </div>
    </>
  );
};

export default FormOrder;
