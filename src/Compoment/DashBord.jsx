import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import "../styles/sidebar.scss";
// import { AuthContext } from "../../context/AuthContext";
import {
  Card,
  Image,
  Button,
  Icon,
  Message,
  Menu,
  Label,
  Grid,
  List,
  Divider,
  Dropdown,
  Segment,
  Step,
} from "semantic-ui-react";
const DashBord = () => {
  const navitage = useNavigate();
  const [activeItem, SetActiveItem] = useState("Dashboard");

  const handleItemClick = (e, { name }) => {
    if (name === "Logout") {
      // signout(() => {
      //   // toast.error("Signout Successfully");
      // });
      SetActiveItem(name);
    } else {
      SetActiveItem(name);
    }
  };
  return (
    <>
      <Grid stackable>
        <Card stackable>
          <Image src="" wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              "Vegas"
              {"  |  "}
              {/* {nbrNotif && <Label circular color="red" empty></Label>} */}
              <Dropdown icon="bell outline" scrolling>
                <Dropdown.Menu>
                  <Dropdown.Divider />
                  <Dropdown.Header
                    icon="bell outline"
                    content="      Notification"
                    as="h3"
                  />
                  <Divider />
                  {/* {notifications.map((notif, index) => (
                    <div>
                      {notif.Course !== null && (
                        <Link
                          to={"/detailCourses/" + notif.Course}
                          onClick={() => updatenotification(notif._id)}
                        >
                          <List divided>
                            <List.Item>
                              <List.Icon
                                name="file text"
                                size="large"
                                verticalAlign="middle"
                              />

                              <List.Content>
                                {notif.status === false ? (
                                  <List.Header as="p" style={{ color: "blue" }}>
                                    {notif.Message}
                                  </List.Header>
                                ) : (
                                  <List.Header as="p">
                                    {notif.Message}
                                  </List.Header>
                                )}
                                <List.Description>
                                  <p style={{ fontSize: "13px" }}>
                                    <ReactTimeAgo
                                      date={notif.Date}
                                      locale="en-US"
                                    />{" "}
                                  </p>{" "}
                                </List.Description>
                              </List.Content>
                            </List.Item>
                          </List>
                          <Divider />
                        </Link>
                      )}
                      <Dropdown.Divider />
                      {notif.Question !== null && (
                        <Link
                          to={"/FAQ/" + notif.Question}
                          onClick={() => updatenotification(notif._id)}
                        >
                          <List divided>
                            <List.Item>
                              <List.Icon
                                name="question circle outline"
                                size="large"
                                verticalAlign="middle"
                              />

                              <List.Content>
                                {notif.status === false ? (
                                  <List.Header as="p" style={{ color: "blue" }}>
                                    {notif.Message}
                                  </List.Header>
                                ) : (
                                  <List.Header as="p">
                                    {notif.Message}
                                  </List.Header>
                                )}
                                <List.Description>
                                  <p style={{ fontSize: "13px" }}>
                                    <ReactTimeAgo
                                      date={notif.Date}
                                      locale="en-US"
                                    />{" "}
                                  </p>{" "}
                                </List.Description>
                              </List.Content>
                            </List.Item>
                          </List>
                          <Divider />
                        </Link>
                      )}
                    </div>
                  ))} */}
                  <Link to={"/Notifications"}>
                    <Step.Group size="mini" widths="seven">
                      <Step>
                        <Icon name="bell" />
                        <Step.Content>
                          <Step.Title>ALL</Step.Title>
                        </Step.Content>
                      </Step>

                      <Step active>
                        <Step.Content>
                          <Step.Title>Notifications</Step.Title>
                        </Step.Content>
                      </Step>
                    </Step.Group>
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Meta>
              <span className="date">
                Joined in
                {/* {moment(isAuth().createdAt).format("yy")} */}
              </span>
            </Card.Meta>
            <Card.Description>
              <Message
                attached
                header="Welcome to our site!"
                content="If you are new in our community go to your profile and add a Bio ,it help you express yourself "
              />
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Menu size="small" fluid vertical>
              <Link to="/class">
                <Menu.Item
                  icon="comments"
                  name="Dashboard"
                  active={activeItem === "Dashboard"}
                  onClick={handleItemClick}
                >
                  Dashboard
                </Menu.Item>
              </Link>
              <Link to="/archiveclass">
                <Menu.Item
                  icon="archive"
                  name="Archived"
                  active={activeItem === "Archived"}
                  onClick={handleItemClick}
                >
                  Archived
                </Menu.Item>
              </Link>

              <Link to="/schedule">
                <Menu.Item
                  name="Routine"
                  active={activeItem === "Routine"}
                  onClick={handleItemClick}
                >
                  Routine
                </Menu.Item>
              </Link>
              <Link to={"/updateProfile/"}>
                <Menu.Item
                  name="Profile"
                  active={activeItem === "Profile"}
                  onClick={handleItemClick}
                >
                  <>
                    {" "}
                    <Label color="red">1</Label>
                    {"Profile"}
                  </>

                  <> {"Profile"}</>
                </Menu.Item>
              </Link>
              <Link to="/login">
                <Menu.Item
                  name="Logout"
                  active={activeItem === "Logout"}
                  onClick={handleItemClick}
                >
                  Logout
                </Menu.Item>
              </Link>
            </Menu>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="group" />
              {/* <Main></Main> */}
            </a>
          </Card.Content>
        </Card>
      </Grid>
    </>
  );
};

export default DashBord;
