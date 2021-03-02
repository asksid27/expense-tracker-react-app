import Layout from "./Layout/Layout";
import styles from "./App.css";
import Aux from "./Aux";
import HomeIcon from "@material-ui/icons/Home";
import { teal } from "@material-ui/core/colors";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function App() {
  // return <Layout />;
  return (
    <Aux>
      <nav>
        <h2 class={styles.logo}>Expense Tracker</h2>
        <ul>
          <li>
            <HomeIcon style={{ color: teal[50] }} />
            Home
          </li>
          <li>
            <SettingsIcon style={{ color: teal[50] }} />
            Settings
          </li>
          <li>
            <ExitToAppIcon style={{ color: teal[50] }} />
            Sign Out
          </li>
        </ul>
      </nav>
      {/* <div class={styles.sidebar}></div> */}
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "65%",
            height: "200vh",
            borderRight: "1px solid #009688",
          }}
        >
          <table className={styles.styled_table}>
            <thead className={styles.styled_table_header}>
              <tr>
                <th>Date</th>
                <th>Spent On</th>
                <th>Place</th>
                <th>Payment Method</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody className={styles.styled_table_body}>
              <tr>
                <td>20/02/2021</td>
                <td>Clothes</td>
                <td>Patna</td>
                <td>Cash</td>
                <td>Clothes</td>
              </tr>
              <tr>
                <td>20/02/2021</td>
                <td>Clothes</td>
                <td>Patna</td>
                <td>Cash</td>
                <td>Clothes</td>
              </tr>
              <tr>
                <td>20/02/2021</td>
                <td>Clothes</td>
                <td>Patna</td>
                <td>Cash</td>
                <td>Clothes</td>
              </tr>
              <tr className={styles.active_tr}>
                <td>20/02/2021</td>
                <td>Clothes</td>
                <td>Patna</td>
                <td>Cash</td>
                <td>Clothes</td>
              </tr>
              <tr>
                <td>20/02/2021</td>
                <td>Clothes</td>
                <td>Patna</td>
                <td>Cash</td>
                <td>Clothes</td>
              </tr>
              <tr>
                <td>20/02/2021</td>
                <td>Clothes</td>
                <td>Patna</td>
                <td>Cash</td>
                <td>Clothes</td>
              </tr>
              <tr>
                <td>20/02/2021</td>
                <td>Clothes</td>
                <td>Patna</td>
                <td>Cash</td>
                <td>Clothes</td>
              </tr>
              <tr>
                <td>20/02/2021</td>
                <td>Clothes</td>
                <td>Patna</td>
                <td>Cash</td>
                <td>Clothes</td>
              </tr>
              <tr>
                <td>20/02/2021</td>
                <td>Clothes</td>
                <td>Patna</td>
                <td>Cash</td>
                <td>Clothes</td>
              </tr>
              <tr>
                <td>20/02/2021</td>
                <td>Clothes</td>
                <td>Patna</td>
                <td>Cash</td>
                <td>Clothes</td>
              </tr>
            </tbody>
          </table>
          <p>
            Lorem ipsum dolor sit, amet consectetur, adipisicing elit. Ullam,
            enim veniam qui, dolores quaerat sequi necessitatibus odio facilis
            minima nostrum, molestias quam molestiae, sunt doloremque. Veniam a
            molestias reiciendis. Similique.Lorem ipsum dolor sit, amet
            consectetur, adipisicing elit. Ullam, enim veniam qui, dolores
            quaerat sequi necessitatibus odio facilis minima nostrum, molestias
            quam molestiae, sunt doloremque. Veniam a molestias reiciendis.
            Similique.Lorem ipsum dolor sit, amet consectetur, adipisicing elit.
            Ullam, enim veniam qui, dolores quaerat sequi necessitatibus odio
            facilis minima nostrum, molestias quam molestiae, sunt doloremque.
            Veniam a molestias reiciendis. Similique.Lorem ipsum dolor sit, amet
            consectetur, adipisicing elit. Ullam, enim veniam qui, dolores
            quaerat sequi necessitatibus odio facilis minima nostrum, molestias
            quam molestiae, sunt doloremque. Veniam a molestias reiciendis.
            Similique.Lorem ipsum dolor sit, amet consectetur, adipisicing elit.
            Ullam, enim veniam qui, dolores quaerat sequi necessitatibus odio
            facilis minima nostrum, molestias quam molestiae, sunt doloremque.
            Veniam a molestias reiciendis. Similique.Lorem ipsum dolor sit, amet
            consectetur, adipisicing elit. Ullam, enim veniam qui, dolores
            quaerat sequi necessitatibus odio facilis minima nostrum, molestias
            quam molestiae, sunt doloremque. Veniam a molestias reiciendis.
            Similique.Lorem ipsum dolor sit, amet consectetur, adipisicing elit.
            Ullam, enim veniam qui, dolores quaerat sequi necessitatibus odio
            facilis minima nostrum, molestias quam molestiae, sunt doloremque.
            Veniam a molestias reiciendis. Similique.Lorem ipsum dolor sit, amet
            consectetur, adipisicing elit. Ullam, enim veniam qui, dolores
            quaerat sequi necessitatibus odio facilis minima nostrum, molestias
            quam molestiae, sunt doloremque. Veniam a molestias reiciendis.
            Similique.Lorem ipsum dolor sit, amet consectetur, adipisicing elit.
            Ullam, enim veniam qui, dolores quaerat sequi necessitatibus odio
            facilis minima nostrum, molestias quam molestiae, sunt doloremque.
            Veniam a molestias reiciendis. Similique.Lorem ipsum dolor sit, amet
            consectetur, adipisicing elit. Ullam, enim veniam qui, dolores
            quaerat sequi necessitatibus odio facilis minima nostrum, molestias
            quam molestiae, sunt doloremque. Veniam a molestias reiciendis.
            Similique.Lorem ipsum dolor sit, amet consectetur, adipisicing elit.
            Ullam, enim veniam qui, dolores quaerat sequi necessitatibus odio
            facilis minima nostrum, molestias quam molestiae, sunt doloremque.
            Veniam a molestias reiciendis. Similique.Lorem ipsum dolor sit, amet
            consectetur, adipisicing elit. Ullam, enim veniam qui, dolores
            quaerat sequi necessitatibus odio facilis minima nostrum, molestias
            quam molestiae, sunt doloremque. Veniam a molestias reiciendis.
            Similique.Lorem ipsum dolor sit, amet consectetur, adipisicing elit.
            Ullam, enim veniam qui, dolores quaerat sequi necessitatibus odio
            facilis minima nostrum, molestias quam molestiae, sunt doloremque.
            Veniam a molestias reiciendis. Similique.Lorem ipsum dolor sit, amet
            consectetur, adipisicing elit. Ullam, enim veniam qui, dolores
            quaerat sequi necessitatibus odio facilis minima nostrum, molestias
            quam molestiae, sunt doloremque. Veniam a molestias reiciendis.
            Similique.
          </p>
        </div>
        <div>Charts will go Here!</div>
      </div>
    </Aux>
  );
}

export default App;
