import Heading from "../../components/Heading/Heading";
import PageContainer from "../../components/PageContainer/PageContainer";
import { getUsers } from "../../services/getUsers";
import styles from "./HomePage.module.css";
import { useState, useEffect } from "react";
import { HOME } from "../../utils/routes";
import LoginPage from "../LoginPage/LoginPage";

const HomePage = ({ token }) => {
  const [userInfo, setUserInfo] = useState();
  const [error, setError] = useState(null);

  const getUserInfo = async () => {
    try {
      const userInfoFromServer = await getUsers(token);
      setUserInfo(userInfoFromServer);
    } catch (err) {
      setError("Unable to get info");
      return;
    }
  };

  // onSubmit={handleSubmit(async (formData) => {
  //   try {
  //     setLoading(true);
  //     await registerUser({
  //       email: props.giveData.email,
  //       password: props.giveData.password,
  //       firstName: formData.firstName,
  //       lastName: formData.lastName,
  //       address: formData.address,
  //       gender: formData.gender,
  //       termsAndConditions: formData.termsAndConditions,
  //       newsletter: formData.newsletter,
  //     });
  //     setError(null);
  //   }
  //    catch (err) {
  //     setError("User already exist");
  //     return;
  //    }
  //   props.getData(null);
  //   console.log(props.giveData);
  //   navigate(routes.loginPage)
  // })}

  useEffect(() => {
    if (!error) {
      return;
    }

    const clearError = () => {
      setError((currentError) => (currentError = null));
    };

    setTimeout(clearError, 10 * 1000);
  }, error);

  useEffect(() => {
    getUserInfo();
  }, []);

  console.log(userInfo);

  return (
    <PageContainer>
      <div className={styles.secondContainer}>
        <div className={styles.thirdContainer}>
          <Heading title="YOUR iNFO" />
          <div className={styles.infoContainer}>
            {error && <p className={styles.alert}>{error}</p>}
            <div>
              <p className={styles.infoParagraph}>Email:</p>
              <p className={styles.userParagraph}>test</p>
            </div>
            <div>
              <p className={styles.infoParagraph}>First name:</p>
              <p className={styles.userParagraph}>test</p>
            </div>
            <div>
              <p className={styles.infoParagraph}>Last name:</p>
              <p className={styles.userParagraph}></p>
            </div>
            <div>
              <p className={styles.infoParagraph}>Address:</p>
              <p className={styles.userParagraph}></p>
            </div>
            <div>
              <p className={styles.infoParagraph}>Gender:</p>
              <p className={styles.userParagraph}></p>
            </div>
            <div>
              <p className={styles.infoParagraph}>Newsletter subscribtion:</p>
              <p className={styles.userParagraph}></p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;

// res.json((post) => post.email === req.user.email);
