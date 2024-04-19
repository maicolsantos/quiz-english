import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

export const AnswerItem = () => {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Answer 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Answer 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Answer 3</Label>
      </div>
    </RadioGroup>
  )
}
