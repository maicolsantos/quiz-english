import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

export const AnswerItem = () => {
  return (
    <RadioGroup defaultValue="comfortable" className="space-y-2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">enthusiasm</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">support</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">indifference</Label>
      </div>
    </RadioGroup>
  )
}
