import Enzyme from "enzyme";
import "@testing-library/jest-dom";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom/extend-expect";
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
