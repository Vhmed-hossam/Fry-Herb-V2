import { Button } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section class="maincontent">
      <div className="h-screen grid place-items-center text-center">
        <div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, This Page does't exist</p>
          <Button
            className="mt-5"
            as={Link}
            variant="shadow"
            to={`/meals`}
            color="primary"
          >
            Go To Home
          </Button>
        </div>
      </div>
    </section>
  );
}
