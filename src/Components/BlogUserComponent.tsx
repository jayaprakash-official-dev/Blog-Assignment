import React, { useEffect, useState } from "react";
import { UserStateManager } from "../Voltio/UserStateManager";
import { useSnapshot } from "valtio";
import { UserState } from "../Voltio/store";
import {
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import ErrorComponent from "./ErrorComponent";
import { UserResponse } from "../Models/Response/UserModelResponse";
import LoaderComponent from "./LoaderComponent";

function BlogUserComponent() {
  const { UserList, isLoading } = useSnapshot(UserState);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const onSelect = async (item: UserResponse) => {
    setSelectedIndex(item.id);
    if (item.id) {
      await UserStateManager.getUserBlog(item);
    }
  };

  const getUser = async () => {
    await UserStateManager.getUser();
    
  };

  useEffect(() => {
    getUser();
  }, [UserList.data?.length]);

  return (
    <>
      {/* loader */}
      {isLoading ? (
        <LoaderComponent width={300} height={50} count={10} size={12} />
      ) : (
        //list of users
        <>
          {UserList &&
            UserList.success &&
            UserList.data &&
            UserList.data.map((item) => {
              const { name, email, id } = item;
              return (
                <ListItemButton
                  onClick={() => onSelect(item)}
                  selected={selectedIndex === id ? true : false}
                  key={id}
                  component="a"
                >
                  <ListItemText primary={name} secondary={email} />
                </ListItemButton>
              );
            })}
        </>
      )}
      {/* Render when error occurs */}
      {UserList && !UserList.success && UserList.error && (
        <ErrorComponent errorMessage={UserList.error} />
      )}
      <Divider style={{ marginTop: 20 }}>END</Divider>
    </>
  );
}

export default BlogUserComponent;
